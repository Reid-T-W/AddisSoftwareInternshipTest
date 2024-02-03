import { ArtistType} from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";
    
interface ArtistsState {
    artists: ArtistType[]
}

const initialState: ArtistsState = {
    artists: []
}

const artistsSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        // functions related to artists state
        fetchArtistsSucceeded: (state, action) => {
            state.artists = action.payload;
        },
        fetchArtistsFailed: (state, action) => {
            console.log("Failed to fetch artists: ", action.payload);
        }  
    }
})

export const { 
    fetchArtistsSucceeded, 
    fetchArtistsFailed,
} = artistsSlice.actions;
export default artistsSlice.reducer;