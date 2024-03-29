const Song = require('../models/songModel')
const mongoose = require('mongoose')

// Get all songs
const getSongs = async(req, res) => {
    // Newly added songs will be listed first
    const songs = await Song.find({}).select('title album artist genere').sort({createdAt: -1})
    res.status(200).json(songs)
}

// Get a single song
const getSingleSong = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such song'})
    }

    const song = await Song.findById(id)

    if (!song) {
        return res.status(404).json({error: 'No such song'})
    }

    res.status(200).json(song)
}

// Create a new song
const createSong = async(req, res) => {
    const {title, album, artist, genere} = req.body
    try {
        // add doc to db
        const newSong = await Song.create({title, album, artist, genere})
        const selectedFieldsSong = await Song.findById(newSong._id).select('title album artist genere');
        res.status(200).json(selectedFieldsSong)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// Update a song
const updateSong = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such song'})
    }

    const song = await Song.findOneAndUpdate({_id: id}, {
        ...req.body,
    }, {new: true}).select('title album artist genere')

    if (!song) {
        return res.status(400).json({error: 'No such song'})
    }

    res.status(200).json(song)
}

// Remove a song
const deleteSong = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such song'})
    }

    const song = await Song.findOneAndDelete({_id: id})

    if (!song) {
        return res.status(400).json({error: 'No such song'})
    }

    res.status(200).json(song)
}

// Get list of filtered songs
const filterSongs = async(req, res) => {
    const filteredSongs = await Song.find(req.query).sort({createdAt: -1})
    res.status(200).json(filteredSongs)
}


// Get all stats
const getStats = async (req, res) => {
    // get total number of songs
    const songsCount = await Song.countDocuments({})

    // get total number of albums
    const distinctAlbums = await Song.distinct('album')

    // get total number of artists
    const distinctArtists = await Song.distinct('artist')

    // get total number of geners
    const distinctGeneres = await Song.distinct('genere')

    res.status(200).json({
                            songsCount, 
                            albumsCount: distinctAlbums.length,
                            artistsCount: distinctArtists.length,
                            genersCount: distinctGeneres.length
                        })
}


module.exports = {
    createSong,
    getSongs,
    getSingleSong,
    deleteSong,
    updateSong,
    getStats,
    filterSongs
}