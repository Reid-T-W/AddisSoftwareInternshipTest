import { ArtistType} from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Artists State
 * 
 * @interface
 */
interface ArtistsState {
    artists: ArtistType[]
}

// Initial State of artists
const initialState: ArtistsState = {
    artists: []
}

const artistsSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        // Functions related to artists state
        fetchArtistsSucceeded: (state, action) => {
            state.artists = action.payload;
        },
        fetchArtistsFailed: (state, action) => {
            toast.error(`Failed to fetch artists, ${action.payload}`)
        }  
    }
})

export const { 
    fetchArtistsSucceeded, 
    fetchArtistsFailed,
} = artistsSlice.actions;
export default artistsSlice.reducer;