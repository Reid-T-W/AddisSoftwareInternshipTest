import { SongType, StatsType } from '../../models/models';
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
            toast.error(`Failed to fetch songs, ${action.payload}`)
        },
        editSongSucceeded: (state, action) => {
            const songs = state.songs;
            songs.map(song => 
                song._id === action.payload._id ? action.payload : song
            );
            state.songs = songs;
            toast.success(`Song updated successfully`)
        },
        editSongFailed: (state, action) => {
            toast.error(`Failed to update song, ${action.payload}`)
        },
        deleteSongSucceeded: (state, action) => {
            const songIdToRemove = action.payload._id;
            const songs = state.songs.filter(song => song._id !== songIdToRemove);
            state.songs = songs;
            toast.success(`Song deleted successfully`)
        },
        deleteSongFailed: (state, action) => {
            toast.error(`Failed to delete song, ${action.payload}`)
        },
        addSongSucceeded: (state, action) => {
            state.songs.unshift(action.payload);
            toast.success("Song added successfully")
        },
        addSongFailed: (state, action) => {
            toast.error(`Failed to add song ${action.payload}`)
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
            toast.error(`Failed to fetch stats, ${action.payload}`)
        },
        searchSongSucceeded: (state, action) => {
            state.songs = action.payload;
            if (state.songs.length !== 0) {
                toast.success(`Search results retrieved successfully`)
            } else {
                toast.info(`No items found, please ensure the spelling 
                            is correct and that the correct filter is 
                            selected`)
            }
        },
        searchSongFailed: (state, action) => {
            toast.error(`Failed to search, ${action.payload}`)
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