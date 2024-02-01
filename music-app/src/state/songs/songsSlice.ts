import { SongType } from '../../models/models';
import { createSlice } from "@reduxjs/toolkit";

interface SongsState {
    songs: SongType[];
    editSong: boolean;
}

const initialState: SongsState = {
    songs: [],
    editSong: false
}

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        addSong: (state, action) => {
            const newSong = action.payload;
            state.songs.push(newSong);
        },
        fetchSongsRequested: (state, action) => {
            console.log("Fetching songs ...")
        },
        fetchSongsSucceeded: (state, action) => {
            state.songs = action.payload;
        },
        fetchSongsFailed: (state, action) => {
            console.log("Failed to fetch songs: ", action.payload)
        },
        setEditSong: (state, action) => {
            state.editSong = action.payload;
        },
        editSongSucceeded: (state, action) => {
            const songs = state.songs
            songs.map(song => 
                song._id === action.payload._id ? action.payload : song
            );
            state.songs = songs
        },
        editSongFailed: (state, action) => {
            console.log("Failed to update song")
        },
        deleteSongSucceeded: (state, action) => {
            const songIdToRemove = action.payload._id;
            const songs = state.songs.filter(song => song._id !== songIdToRemove);
            state.songs = songs
        },
        deleteSongFailed: (state, action) => {
            console.log("Failed to delete song")
        },
        addSongSucceeded: (state, action) => {
            state.songs.unshift(action.payload)
        },
        addSongFailed: (state, action) => {
            console.log("Failed to add song")
        }
    }
})

export const { addSong, 
               fetchSongsRequested, 
               fetchSongsSucceeded, 
               fetchSongsFailed,
               setEditSong,
               editSongSucceeded,
               editSongFailed,
               deleteSongSucceeded,
               deleteSongFailed,
               addSongSucceeded,
               addSongFailed } = songsSlice.actions;
export default songsSlice.reducer;