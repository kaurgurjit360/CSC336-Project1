const express = require("express");
const router = express.Router();
const db = require("../models");

//get all the genres
router.get("/allgenre", (req, res) => {
    db.genre.findAll().then( genres => res.send(genres));
  
    
});

//get all the songs
router.get("/allsong", (req, res) => {
    db.song.findAll().then( songs => res.send(songs));
  
    
});

//get all the artist
router.get("/allartist", (req, res) => {
    db.artist.findAll().then( artists => res.send(artists));
  
    
});

//get all the albums
router.get("/allalbum", (req, res) => {
    db.album.findAll().then( albums => res.send(albums));
  
    
});

//get genre by name
router.get("/find/:genre_name", (req, res) => {
    db.genre.findAll({
        where: {
            genre_name: req.params.genre_name
        }
    }).then(genres => res.send(genres));
});
//create a genre
router.post("/newgenre", (req, res) => {
    db.genre.create({
        id: req.body.id,
        genre_name: req.body.genre_name
    }).then( submittedgenre => res.send(submittedgenre));
});
//create a song
router.post("/newsong", (req, res) => {
    db.song.create({
        id: req.body.id,
        song_name: req.body.song_name,
        albumId: req.body.albumId,
        artistId: req.body.artistId,
       

    }).then( submittedsong => res.send(submittedsong));
});
//create an artist
router.post("/newartist", (req, res) => {
    db.artist.create({
        id: req.body.id,
        artist_name: req.body.artist_name
    }).then( submittedartist => res.send(submittedartist));
});

//create an album
router.post("/newalbum", (req, res) => {
    db.album.create({
        id: req.body.id,
        album_name: req.body.album_name
    }).then( submittedalbum => res.send(submittedalbum));
});

//create an playlist
/*router.post("/newplaylist", (req, res) => {
    db.playlist.create({
        id: req.body.id,
        playlist_name: req.body.playlist_name
    }).then( submittedalbum => res.send(submittedalbum));
});*/

//create an user
router.post("/newuser", (req, res) => {
    db.user.create({
        id: req.body.id,
        name: req.body.name,
        password: req.body.password

    }).then( submittedalbum => res.send(submittedalbum));
});

//create an likeplaylist
/*router.post("/newlikeplaylist", (req, res) => {
    db.likeplaylist.create({
        id: req.body.id,
        userId: req.body.usedId,
        songId: req.body.songId,
       
    }).then( submittedalbum => res.send(submittedalbum));
});
*/
//create an likesong
router.post("/newlikesong", (req, res) => {
    db.likesong.create({
        id: req.body.id,
        userId: req.body.usedId,
        songId: req.body.songId,
        playlistId: req.body.playlistId
    }).then( submittedalbum => res.send(submittedalbum));
});

//deleteing songs

router.delete("/deletesong",(req,res)=> {
  db.song.destroy({
    where:{
        id: req.body.id
    }

  }).then(()=>res.send("Success!"));
});


//deleteing artist

router.delete("/deleteartist",(req,res)=> {
    db.artist.destroy({
      where:{
          id: req.body.id
      }
  
    }).then(()=>res.send("Success!"));
  });

  
//deleteing album

router.delete("/deletealbum",(req,res)=> {
    db.album.destroy({
      where:{
          id: req.body.id
      }
  
    }).then(()=>res.send("Success!"));
  });
  
  
//deleteing genre

router.delete("/deletesong",(req,res)=> {
    db.genre.destroy({
      where:{
          id: req.body.id
      }
  
    }).then(()=>res.send("Success!"));
  });
  
  
//deleteing likeplaylist
/*
router.delete("/deletesong",(req,res)=> {
    db.likeplaylist.destroy({
      where:{
          id: req.body.id
      }
  
    }).then(()=>res.send("Success!"));
  });
  */
  
//deleteing songs

router.delete("/deletelikesong",(req,res)=> {
    db.likesong.destroy({
      where:{
          id: req.body.id
      }
  
    }).then(()=>res.send("Success!"));
  });
  
  
//deleteing user

router.delete("/deleteuser",(req,res)=> {
    db.user.destroy({
      where:{
          id: req.body.id
      }
  
    }).then(()=>res.send("Success!"));
  });
  

module.exports = router;