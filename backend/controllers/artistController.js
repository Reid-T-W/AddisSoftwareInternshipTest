const Song = require('../models/songModel')
const mongoose = require('mongoose')

// get all artists
const getArtists = async(req, res) => {
    
    const artistsWithSongCount = await Song.aggregate([
        {
          $group: {
            _id: "$artist",
            songCount: { $sum: 1 },
            albums: { $addToSet: "$album" },
          }
        },
        {
          $sort: { "_id": 1 }
        }
      ]);

    return res.status(200).json({"artistsWithSongCount": artistsWithSongCount})
}

module.exports = {
    getArtists
}