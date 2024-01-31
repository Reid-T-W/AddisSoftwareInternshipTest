const mongoose = require('mongoose')

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genere: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Song', songSchema)
