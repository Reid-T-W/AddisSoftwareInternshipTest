import { SongType, StatsType } from '../../models/models';
import { createSlice } from "@reduxjs/toolkit";

interface SongsState {
    songs: SongType[];
    editSong: boolean;
    stats: StatsType;
}

const initialState: SongsState = {
    songs: [],
    editSong: false,
    stats: {songsCount: 0,
            albumsCount: 0,
            artistsCount: 0,
            genersCount: 0}
}

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {

        // functions related to songs state
        fetchSongsRequested: (state, action) => {
            console.log("Fetching songs ...");
        },
        fetchSongsSucceeded: (state, action) => {
            state.songs = action.payload;
        },
        fetchSongsFailed: (state, action) => {
            console.log("Failed to fetch songs: ", action.payload);
        },
        editSongSucceeded: (state, action) => {
            const songs = state.songs;
            songs.map(song => 
                song._id === action.payload._id ? action.payload : song
            );
            state.songs = songs;
        },
        editSongFailed: (state, action) => {
            console.log("Failed to update song");
        },
        deleteSongSucceeded: (state, action) => {
            const songIdToRemove = action.payload._id;
            const songs = state.songs.filter(song => song._id !== songIdToRemove);
            state.songs = songs;
        },
        deleteSongFailed: (state, action) => {
            console.log("Failed to delete song");
        },
        addSongSucceeded: (state, action) => {
            state.songs.unshift(action.payload);
        },
        addSongFailed: (state, action) => {
            console.log("Failed to add song");
        },

        // function related to the editSong state
        setEditSong: (state, action) => {
            state.editSong = action.payload;
        },

        // functions related to the totalNoOfSongs state
        getStatsSucceeded: (state, action) => {
            state.stats = action.payload;
        },
        getStatsFailed: (state, action) => {
            console.log("Falied to get the stats");
        },
        searchSongSucceeded: (state, action) => {
            state.songs = action.payload;
        },
        searchSongFailed: (state, action) => {
            console.log("Failed to search song")
        }
    }
})

export const { 
               fetchSongsRequested, 
               fetchSongsSucceeded, 
               fetchSongsFailed,
               setEditSong,
               editSongSucceeded,
               editSongFailed,
               deleteSongSucceeded,
               deleteSongFailed,
               addSongSucceeded,
               addSongFailed,
               getStatsSucceeded,
               getStatsFailed,
               searchSongSucceeded,
               searchSongFailed } = songsSlice.actions;
export default songsSlice.reducer;