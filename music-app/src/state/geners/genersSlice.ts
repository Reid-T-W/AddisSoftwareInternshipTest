import { GenereType } from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";

interface GeneresState {
    generes: GenereType[]
}


const initialState: GeneresState = {
    generes: []
}

const generesSlice = createSlice({
    name: "generes",
    initialState,
    reducers: {
        fetchGeneresSucceeded: (state, action) => {
            state.generes = action.payload
        },
        fetchGeneresFailed: (state, action) => {
            console.log("Failed to fetch generes", action.payload)
        }
    }
})

export const { 
    fetchGeneresSucceeded, 
    fetchGeneresFailed,
} = generesSlice.actions;
export default generesSlice.reducer;







