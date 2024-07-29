const db = require("../db/dbConfig.js");

const getAllArtists = async () => {
    try {
        const allArtists = await db.any("SELECT * FROM artists");
        return allArtists;
    } catch (error) {
        return error;
    }
};

const getArtist = async (id) => {
    try {
        const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id);
        return oneArtist;
    } catch (error) {
        return error;
    };
};

const createArtist = async (artist) => {
    try {
        const newArtist = await db.one(
            "INSERT INTO artists (name) VALUES($1) RETURNING *",
            [artist.name]
        );
        return newArtist;
    } catch (error) {
        return error;
    };
};

const deleteArtist = async (id) => {
    try {
        const deletedArtist = await db.one(
            "DELETE FROM artists WHERE id=$1 RETURNING *", id
        );
        return deletedArtist
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllArtists,
    getArtist,
    createArtist,
    deleteArtist
};