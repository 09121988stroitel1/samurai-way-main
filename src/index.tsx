import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import StateType, {addPost} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import {rerenderIntireThree} from './render';
import state from './redux/state';

// type StateIndexType1 = {
//     state: StateType
//     addPost: ()=> void
// }

// let rerenderIntireThree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state}
//                  addPost={addPost}
//             />
//         </BrowserRouter>
//         ,
//         document.getElementById('root')
//     );
// }
//
 rerenderIntireThree( state)
