import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        add: (state) => {
            state.count = state.count + 1;
        },
        sub: (state) => {
            state.count = state.count - 1;
        }
    }
});


export const { add, sub } = countSlice.actions;
export default countSlice.reducer;