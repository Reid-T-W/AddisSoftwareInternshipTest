import { AlbumType } from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";

interface AlbumState {
    albums: AlbumType[]
}

const initialState: AlbumState = {
    albums: []
}

const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {

        // functions related to albums state
        fetchAlbumsSucceeded: (state, action) => {
            state.albums = action.payload;
        },
        fetchAlbumsFailed: (state, action) => {
            console.log("Failed to fetch albums: ", action.payload);
        }
        }
    })

    export const { 
        fetchAlbumsSucceeded, 
        fetchAlbumsFailed,
 } = albumsSlice.actions;
export default albumsSlice.reducer;