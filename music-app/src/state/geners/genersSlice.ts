import { GenereType } from '../../models/models'
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

/**
 * Generes State
 * 
 * @interface
 */
interface GeneresState {
    generes: GenereType[]
}

// Initial state of generes
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
            toast.error(`Failed to fetch genres, ${action.payload}`)
        }
    }
})

export const { 
    fetchGeneresSucceeded, 
    fetchGeneresFailed,
} = generesSlice.actions;
export default generesSlice.reducer;







