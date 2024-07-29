const express = require("express");
const artists = express.Router();
const songsController = require('./songsController');
const {
    getAllArtists,
    getArtist,
    createArtist,
    deleteArtist
} = require('../queries/artists');

artists.use('/:artist_id/songs', songsController);

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

artists.post("/", async (req, res) => {
    try {
        const artist = await createArtist(req.body);
        res.json(artist)
    } catch (error) {
        res.status(400).json({ error: error });
    };
});

artists.delete("/:id", async (req ,res) => {
    const { id } = req.params;
    const deletedArtist  = await deleteArtist(id);
    
    if(deletedArtist.id) {
        res.status(200).json(deletedArtist);
    } else {
        res.status(404).json("Artist not found");
    };
});

module.exports = artists;