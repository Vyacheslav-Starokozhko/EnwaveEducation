import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define a type for the slice state
interface GlobalState {
    background: string,
    activeSection: string,
    activeSectionIdx: number,
    countSections:number
}

// Define the initial state using that type
const initialState: GlobalState = {
    background: '',
    activeSection: '',
    activeSectionIdx: 0,
    countSections: 0,
}

interface changeSection {
    background: string,
    activeSection: string,
    activeSectionIdx:number
}
interface setCountSections {
    countSections:number
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeSection: (state: any,action:PayloadAction<changeSection>) => {
            const {background,activeSection,activeSectionIdx} = action.payload;
            state.background = background;
            state.activeSection = activeSection;
            state.activeSectionIdx = activeSectionIdx;
        },
        setCountSections: (state: any,action:PayloadAction<setCountSections>) => {
            const {countSections} = action.payload;
            state.countSections = countSections;
        }
    }
})

export const {changeSection,setCountSections} = globalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const globalReducer = globalSlice.reducer
