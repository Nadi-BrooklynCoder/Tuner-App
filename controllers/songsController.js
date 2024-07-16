const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/song");

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();

    if(allSongs[0]){
    res.status(200).json(allSongs);
    } else {
        res.status(500).json( { error: "Server Error" });
    };
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const singleSong = await getSong(id);

    if(singleSong) {
        res.status(200).json(singleSong);
    } else {
        res.status(404).json({ error: "Song not found."})
    }
});

songs.post("/", async (req, res) => {
    const newSong = await createSong(req.body);

    res.status(201).json(newSong);
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