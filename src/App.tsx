import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {ActionType, StateType} from './redux/state';

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}



function App(props:PropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={()=> <Profile
                        profilePage={props.state.profilePage}
                        dispatch = {props.dispatch}
                    />}/>

                    <Route path='/dialogs' render={()=> <Dialogs
                        dialogsMessages={props.state.messagesPage}
                        dispatch = {props.dispatch}

                    /> }/>
                    {/*<Route path=# component={News}/>*/}
                    {/*<Route path='/dialogs' component={Music}/>*/}

                </div>

            </div>


    );
}

export default App;
