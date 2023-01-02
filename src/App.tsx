import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {StateType, updateNewPostText} from './redux/state';

type PropsType = {
    state: StateType
    addPost: ()=> void
    updateNewPostText: (newText: string)=> void
}



function App(props:PropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={()=> <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>

                    <Route path='/dialogs' render={()=> <Dialogs
                        dialogsMessages={props.state.messagesPage}

                    /> }/>
                    {/*<Route path=# component={News}/>*/}
                    {/*<Route path='/dialogs' component={Music}/>*/}

                </div>

            </div>


    );
}

export default App;
