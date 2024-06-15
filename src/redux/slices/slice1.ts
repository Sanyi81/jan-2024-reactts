import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        increment: (state,
                    action:PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        decrement: (state,
                    action:PayloadAction<number>) => {
            state.value = state.value - action.payload;
        },
        reset: (state,
                action:PayloadAction<number>) => {
            state.value = state.value = action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    reset
} = counter1Slice.actions;