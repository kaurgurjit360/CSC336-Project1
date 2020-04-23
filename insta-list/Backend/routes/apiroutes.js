const express = require("express");
const router = express.Router();
const db = require("../models");

//get all the genres
router.get("/all", (req, res) => {
    db.genre.findAll().then(genres => res.send(genres));
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
module.exports = router;