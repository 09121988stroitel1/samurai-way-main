import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from './redux/state';
import {BrowserRouter} from "react-router-dom";

type StateIndexType = {
    state: StateType

}

export let rerenderIntireThree= (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


