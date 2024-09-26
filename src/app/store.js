import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/countSlice"
export const store = configureStore({
    reducer: countReducer,
});