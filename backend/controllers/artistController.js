const Song = require('../models/songModel')
const mongoose = require('mongoose')

// get all artists
const getArtists = async(req, res) => {
    
    const artistsWithSongCount = await Song.aggregate([
        {
          $group: {
            _id: "$artist",
            songCount: { $sum: 1 },
          },
        },
      ]);

    return res.status(200).json({"artistsWithSongCount": artistsWithSongCount})
}

const getArtistsAlbums = async (req, res) => {
    
    const artistsWithAlbumCount = Song.aggregate([
        {
          $group: {
            _id: "$artist",
            albums: { $addToSet: "$album" },
            albumCount: { $sum: 1 } // Count the number of albums for each artist
          }
        },
        // {
        //   $project: {
        //     artist: "$_id",
        //     albums: 1,
        //     albumCount: 1,
        //     _id: 0
        //   }
        // }
      ]);
      return res.status(200).json({"artistsWithAlbumCount": artistsWithAlbumCount})
}

module.exports = {
    getArtists,
    getArtistsAlbums
}