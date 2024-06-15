import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, reset} from "./redux/slices/slice1";

const App = () => {

    const {value} = useAppSelector((state: any) => state.slice1);

    const dispatch = useAppDispatch();
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => {
                dispatch(increment(100))
            }}>increment</button>
            <button onClick={() => {
                dispatch(decrement(10))
            }}>decrement</button>
            <button onClick={() => {
                dispatch(reset(0))
            }}>
                reset
            </button>
        </div>
    );
};

export default App;