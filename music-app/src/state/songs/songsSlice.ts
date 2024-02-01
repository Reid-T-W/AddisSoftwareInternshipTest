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
        removeSong: (state, action) => {
            const songIdToRemove = action.payload;
            const songs = state.songs.filter(song => song._id !== songIdToRemove);
            state.songs = songs
        },
        updateSong: (state, action) => {
            const songIdToUpdate = action.payload[0];
            const editedSong = action.payload[1];
            const songs: SongType[] = state.songs.filter(song => song._id !== songIdToUpdate);
            songs.push(editedSong);
            state.songs = songs
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
            console.log("In edit song", action.payload)
            const songs = state.songs
            songs.map(song => 
                song._id === action.payload._id ? action.payload : song
            );
            state.songs = songs
        },
        editSongFailed: (state, action) => {
            console.log("Failed to update song")
        }
    }
})

export const { addSong, 
               removeSong, 
               updateSong, 
               fetchSongsRequested, 
               fetchSongsSucceeded, 
               fetchSongsFailed,
               setEditSong,
               editSongSucceeded,
               editSongFailed } = songsSlice.actions;
export default songsSlice.reducer;