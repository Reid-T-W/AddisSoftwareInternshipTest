const Song = require('../models/songModel')
const mongoose = require('mongoose')

// get all geners
const getGeneres = async(req, res) => {
    
    const generesWithSongCount = await Song.aggregate([
        {
          $group: {
            _id: "$genere",
            songCount: { $sum: 1 },
          },
        },
      ]);

    return res.status(200).json({"generesWithSongCount": generesWithSongCount})
}

module.exports = {
    getGeneres
}