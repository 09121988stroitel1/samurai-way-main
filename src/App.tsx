import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import { StoreType } from './redux/state';

type PropsType = {
    store: StoreType
}



function App(props:PropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={()=> <Profile
                        profilePage={props.store.state.profilePage}
                        addPost={props.store.addPost.bind(props.store)}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    />}/>

                    <Route path='/dialogs' render={()=> <Dialogs
                        dialogsMessages={props.store.state.messagesPage}

                    /> }/>
                    {/*<Route path=# component={News}/>*/}
                    {/*<Route path='/dialogs' component={Music}/>*/}

                </div>

            </div>


    );
}

export default App;
