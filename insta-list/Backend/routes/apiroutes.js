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
        albumId: req.body.albumId
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

//deleteing songs

router.delete("/deletesong",(req,res)=> {
  db.song.destroy({
    where:{
        id: req.body.id
    }

  }).then(()=>res.send("Success!"));
});


module.exports = router;