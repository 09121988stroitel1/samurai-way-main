import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {StateType} from "./redux/state";

type StateIndexType = {
    state: StateType
}



ReactDOM.render(

    <App state={state}/>,
  document.getElementById('root')
);