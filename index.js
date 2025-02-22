// Good luck!
const express = require("express")
const { request } = require("http")
const { userInfo } = require("os")
const app = express()

let Musi = {
  "userData": {
    "playlists": [
      {
        "playlistName": "Chill Vibes",
        "playlistId": "chilling",
        "songs": [
          {
            "songId": "song_1",
            "songName": "Sunset Dreams",
            "songLength": "3:45",
            "artist": "Liam Wave"
          },
          {
            "songId": "song_2",
            "songName": "Ocean Breeze",
            "songLength": "4:05",
            "artist": "Anna Melon"
          }
        ]
      },
      {
        "playlistName": "Workout Beats",
        "playlistId": "gym",
        "songs": [
          {
            "songId": "song_3",
            "songName": "Stronger Together",
            "songLength": "2:50",
            "artist": "Fit Groove"
          },
          {
            "songId": "song_4",
            "songName": "Energy Boost",
            "songLength": "3:15",
            "artist": "Blaze Power"
          },
          {
            "songId": "song_5",
            "songName": "High Intensity",
            "songLength": "3:30",
            "artist": "Turbo Beat"
          }
        ]
      }
    ],
    "likedSongs": [
      {
        "songId": "song_6",
        "songName": "Dreamscape",
        "songLength": "4:20",
        "artist": "Lunar Lights"
      },
      {
        "songId": "song_7",
        "songName": "Blissful Moments",
        "songLength": "3:10",
        "artist": "Euphoria"
      },
      {
        "songId": "song_8",
        "songName": "Nightfall Serenity",
        "songLength": "5:00",
        "artist": "Echo Dreams"
      }
    ],
    "favorites": [
      {
        "songId": "song_9",
        "songName": "Lost In Time",
        "songLength": "4:30",
        "artist": "Temporal"
      },
      {
        "songId": "song_10",
        "songName": "Feel The Pulse",
        "songLength": "3:00",
        "artist": "Pulse Theory"
      }
    ]
  }
}




function getRandomIndex(playlist){
  if (playlist[1] === 1){
    return Math.floor(Math.random() * classDatadata.playlist.length);
  } else if (playlist[2] === 2) {
    return Math.floor(Math.random() * classDatadata.playlist.length);
  } else {
    throw new Error("Invalid section number. Please enter 1 or 2 for a random index.")
  }
}

app.listen(3000, () => {
  console.log("Server running")
})

app.use((request,response,next)=>{
  console.log(request.method + " /" + request.url)
  next();
})

app.get("/", (request, response) => {
  response.status(200).send("Welcome to Musi")
})

app.get("/docs", (request,response) => {
  response.send("Go to /randomplaylist or /playlistName to learn about the Playlists")
})

app.get("/randomplaylist",(resquest, response)=> {
  response.status(200).json(Musi.userData.playlists[Math.floor(Math.random() * Musi.userData.playlists.length)])
})


app.get("/playlistName",(request, response)=>{
  response.status(200).json(Musi.userData.playlists.playlistName)
})

app.use((request, res, next)=>{
  res.status(404).send("404 page")
})
