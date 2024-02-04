import { AlbumType } from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

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
            toast.error(`Failed to fetch albums, ${action.payload}`)
        }
        }
    })

    export const { 
        fetchAlbumsSucceeded, 
        fetchAlbumsFailed,
 } = albumsSlice.actions;
export default albumsSlice.reducer;