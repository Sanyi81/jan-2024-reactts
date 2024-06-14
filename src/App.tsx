import React from 'react';
import './App.css';
import {useSelector} from "react-redux";


const App = () => {

    const {value} = useSelector((state: any) => state.slice1);
    return (
        <div>
            <h2>{value}</h2>
            <button>increment</button>
            <button>decrement</button>
        </div>
    );
};

export default App;