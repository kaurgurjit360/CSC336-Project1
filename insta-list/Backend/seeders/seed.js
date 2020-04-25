const {album, artist, song, user} = require ('../models') // you need the connection to the database and Campus model

const seed = async () => {
    //insert albums
  const whitney_album =  album.create({
    id:'1',
    album_name: 'Whitney Houston',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const frank_album =  album.create({
    id:'2',
    album_name: 'My Way',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  //insert artist
  const witney_artist =  artist.create({
    id:'1',
    artist_name: 'Whitney Houston',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const frank_artist =  artist.create({
    id:'2',
    artist_name: 'Frank Sinatra',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  //insert songs
  const witney_song1 =  song.create({
    id:'1',
    song_name: 'I will always love you',
    artistId: '1',
    albumId: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const witney_song2 =  song.create({
    id: '2',
    song_name: 'Where you are',
    artistId: '1',
    albumId: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const Frank_song1 =  song.create({
    id:'3',
    song_name: 'My Way',
    artistId: '2',
    albumId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const Frank_song2 =  song.create({
    id:'4',
    song_name: 'Mrs. Robinson',
    artistId: '2',
    albumId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  //insert playlist

  //insert user
  const user1 =  user.create({
    id: '1',
    name: 'testuser1',
    password: 'password',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  console.log('Seed Successful!') //Have a prompt to let you know everything is working correctly!
}

seed() 
