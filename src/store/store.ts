import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "./reducers/counterSlice.ts";
// ...

const rootReducer = combineReducers({
    counterReducer
})


export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];