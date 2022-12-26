import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

type StateIndexType = {
    state: StateType
}

ReactDOM.render(
    <BrowserRouter>
    <App state={state}/>
    </BrowserRouter>
    ,
  document.getElementById('root')
);