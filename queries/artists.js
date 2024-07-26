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

module.exports = {
    getAllArtists,
    getArtist
};