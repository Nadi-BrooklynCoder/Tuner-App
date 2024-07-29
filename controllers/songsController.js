const express = require("express");
const songs = express.Router({ mergeParams: true });
const { getArtist } = require('../queries/artists');
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
    const { artist_id } = req.params;
    const songs = await getAllSongs(artist_id);
    const artist = await getArtist(artist_id);

    if(artist.id){
    res.status(200).json({ ...artist, songs });
    } else {
        res.status(500).json( { error: "Server Error" });
    };
});

songs.get("/:id", async (req, res) => {
    const { artist_id, id } = req.params;
    const song = await getSong(id);
    const artist = await getArtist(artist_id)

    if(song) {
        res.status(200).json({ ...artist, song });
    } else {
        res.status(404).json({ error: "Song not found."})
    }
});

songs.post("/", async (req, res) => {
    const { artist_id } = req.params
    const song = await createSong({...req.body, artist_id});
    res.status(200).json(song);
});

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);

    if(deletedSong.id) {
        res.status(200).json({ message: "Successfully deleted song" }); 
    } else {
        res.status(404).json({ error: "Song not found." });
    };
});

songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);

    if(updatedSong.id) {
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json( {error: "Song not updated."});
    };
});


module.exports = songs;