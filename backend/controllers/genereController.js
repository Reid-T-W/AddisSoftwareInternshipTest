const Song = require('../models/songModel')
const mongoose = require('mongoose')

// Get all genres along with each of their
// song counts
const getGeneres = async(req, res) => {
    
    const generesWithSongCount = await Song.aggregate([
        {
          $group: {
            _id: "$genere",
            songCount: { $sum: 1 },
          },
        },
        {
          $sort: { "_id": 1 }
        }
      ]);

    return res.status(200).json({"generesWithSongCount": generesWithSongCount})
}

module.exports = {
    getGeneres
}