import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "./reducers/counterSlice.ts";
import {postAPI} from "../services/PostService.ts";
// ...

const rootReducer = combineReducers({
    counterReducer,
    [postAPI.reducerPath]: postAPI.reducer
})


export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>{
            return getDefaultMiddleware().concat(postAPI.middleware)
        }
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];