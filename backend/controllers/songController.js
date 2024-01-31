const Song = require('../models/songModel')
const mongoose = require('mongoose')

// get all songs
const getSongs = async(req, res) => {
    // newly added songs will be listed first
    const songs = await Song.find({}).sort({createdAt: -1})
    res.status(200).json(songs)
}

// get a single song
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

// create a new song
const createSong = async(req, res) => {
    const {title, album, artist, genere} = req.body
    try {
        // add doc to db
        const song = await Song.create({title, album, artist, genere})
        res.status(200).json(song)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// update a song
const updateSong = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such song'})
    }

    const song = await Song.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!song) {
        return res.status(400).json({error: 'No such song'})
    }

    res.status(200).json(song)
}

// remove a song
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

// get list of filtered songs
const filterSongs = async(req, res) => {
    const filteredSongs = await Song.find(req.query).sort({createdAt: -1})
    res.status(200).json(filteredSongs)
}


// get all stats
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