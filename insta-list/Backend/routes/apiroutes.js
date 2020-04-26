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

//get all the user
router.get("/alluser", (req, res) => {
    db.user.findAll().then( artists => res.send(artists));


});

//get all the likesong
router.get("/alllikesong", (req, res) => {
    db.likesong.findAll().then( artists => res.send(artists));


});

//get genre by name
router.get("/find/genre/:genre_name", (req, res) => {
    db.genre.findAll({
        where: {
            genre_name: req.params.genre_name
        }
    }).then(genres => res.send(genres));
});

//get user by name
router.get("/find/user/:name", (req, res) => {
    db.user.findAll({
        where: {
            name: req.params.name
        }
    }).then(users => res.send(users));
});

//get artist by name
router.get("/find/artist/:artist_name", (req, res) => {
    db.artist.findAll({
        where: {
           artist_name: req.params.artist_name
        }
    }).then(artists => res.send(artists));
});

//get album by name
router.get("/find/album/:album_name", (req, res) => {
    db.album.findAll({
        where: {
           album_name: req.params.album_name
        }
    }).then(albums => res.send(albums));
});

//get song by name
router.get("/find/song/:song_name", (req, res) => {
    db.song.findAll({
        where: {
           song_name: req.params.song_name
        }
    }).then(songs => res.send(songs));
});



//create a genre
router.post("/newgenre", (req, res) => {
    db.genre.create({
        id: req.body.id,
        genre_name: req.body.genre_name,
        songId: req.body.songId
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

    })
    .then( submitteduser => res.send(submitteduser));
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
        id:req.body.id,
        userId: req.body.userId,
        songId: req.body.songId

    })
    .then( submittedlike => res.send(submittedlike));
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

router.delete("/deletegenre",(req,res)=> {
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


//login user authenication
//get user and password


router.get("/find/login/:name&:password", (req, res) => {
      user=db.user.findAll({
        where: {
            name: req.params.name,
            password: req.params.password   
        }
        
    }).then(users=>{
        let user = users
        if(user.length)
        {
            
            res.send(users)
        }
        else{

            res.send()
        }

    });

    
   
});



module.exports = router;
