import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';//default import can be renamed to anything.

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})