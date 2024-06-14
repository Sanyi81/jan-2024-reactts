import {configureStore, createSlice} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number;
}

const initialState:CounterStateType = {
    value: 0
}

export const counter1Slice = createSlice({
    name: 'counter1',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        }
    }
});





export const store = configureStore({
    reducer: {
        slice1: counter1Slice.reducer
    }
})