const express = require("express");
const artists = express.Router();

const songsController = require('./songsController');

artists.use('/:artist_id/songs', songsController);

const {
    getAllArtists,
    getArtist
} = require('../queries/artists');

artists.get('/', async (req, res) => {
    const allArtists = await getAllArtists();
    if(allArtists[0]) {
        res.status(200).json(allArtists);
    } else {
        res.status(500).json({ error: 'server error'});
    };
});

artists.get("/:id", async (req, res) => {
    const { id } = req.params;
    const artist = await getArtist(id);
    
    if (artist) {
        res.json(artist);
    } else {
        res.status(404).json({ error: "not found" })
    };
});

module.exports = artists;