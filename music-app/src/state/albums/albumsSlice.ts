import { AlbumType } from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

/**
 * Album State
 * 
 * @interface
 */
interface AlbumState {
    albums: AlbumType[]
}

// Initial State of albums
const initialState: AlbumState = {
    albums: []
}

const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {

        // Functions related to albums state
        fetchAlbumsSucceeded: (state, action) => {
            state.albums = action.payload;
        },
        fetchAlbumsFailed: (state, action) => {
            toast.error(`Failed to fetch albums, ${action.payload}`)
        }
        }
    })

    export const { 
        fetchAlbumsSucceeded, 
        fetchAlbumsFailed,
 } = albumsSlice.actions;
export default albumsSlice.reducer;