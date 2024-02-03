const Song = require('../models/songModel')
const mongoose = require('mongoose')

// get all albums
const getAlbums = async(req, res) => {
    
    const albumsWithSongCount = await Song.aggregate([
        {
          $group: {
            _id: "$album",
            songCount: { $sum: 1 },
          },
        },
        {
          $sort: { "_id": 1 }
        }
      ]);

    return res.status(200).json({"albumsWithSongCount": albumsWithSongCount})
}

module.exports = {
    getAlbums
}