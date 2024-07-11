import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define a type for the slice state
interface GlobalState {
    background: string,
    activeSection: string
}

// Define the initial state using that type
const initialState: GlobalState = {
    background: '',
    activeSection: ''
}

interface changeSection {
    background: string,
    activeSection: string
}


export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeSection: (state: any, action: PayloadAction<changeSection>) => {
            const {background,activeSection} = action.payload;
            state.background = background;
            state.activeSection = activeSection;
        }
    }
})

export const {changeSection} = globalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const globalReducer = globalSlice.reducer
