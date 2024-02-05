const express = require('express')
const {
    createSong,
    getSongs,
    getSingleSong,
    deleteSong,
    updateSong,
    getStats,
    filterSongs
} = require('../controllers/songController')

const {
    getAlbums,
} = require('../controllers/albumController')

const {
    getGeneres,
} = require('../controllers/genereController')

const {
    getArtists,
} = require('../controllers/artistController')

const router = express.Router()

// ROUTES RELATED TO SONGS

// GET route to filter songs
router.get('/songs/search', filterSongs)

// GET route to get all songs
router.get('/songs', getSongs)

// GET route to get a single song
router.get('/songs/:id', getSingleSong)

// POST route to add a song
router.post('/songs', createSong)

// DELETE route to remove a song
router.delete('/songs/:id', deleteSong)

// PATCH route to update a song
router.patch('/songs/:id', updateSong)

// GET route to get all stats, the total number
// of songs, albums, artists, and genres
router.get('/stats', getStats)


// ROUTES RELATED TO ALBUMS

// GET route to get a list of all albums
// along with the number of songs in each
// of them
router.get('/albums', getAlbums)

// ROUTES RELATED TO GENRES

// GET route to get a list of all genres
// along with the number of songs in each
// of them
router.get('/generes', getGeneres)

// ROUTES RELATED TO ARTISTS

// GET route to get a list of all artists
// along with the number of songs and albums
// in each
router.get('/artists', getArtists)


module.exports = router