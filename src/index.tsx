import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';



let rerenderEntireThree= () => {
 ReactDOM.render(
     <BrowserRouter>
      <App  state={store.state}
            dispatch = {store.dispatch.bind(store)}

           // addPost={addPost}
           // updateNewPostText={updateNewPostText}
      />
     </BrowserRouter>
     ,
     document.getElementById('root')
 );
}

 rerenderEntireThree()
store.subscribe(rerenderEntireThree)
