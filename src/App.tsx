import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostsType} from "./index";

type PropsType = {
    posts: PostsType[]
}



function App(props:PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={()=> <Profile posts={props.posts} />}/>
                    <Route path='/dialogs' render={()=> <Dialogs /> }/>
                    {/*<Route path=# component={News}/>*/}
                    {/*<Route path='/dialogs' component={Music}/>*/}


                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
