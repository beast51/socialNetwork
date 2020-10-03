import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/LoginPage";


function App(props) {
    return (
        <div>
            <HeaderContainer/>
            <div className="container-fluid">
                <div className="row">
                    <Navbar/>
                    <Route exact path="/" component={ProfileContainer}/>
                    <Route path="/profile/:userId?" component={ProfileContainer}/>
                    <Route path="/dialogs" component={DialogsContainer}/>
                    <Route path="/users" component={UsersContainer}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={LoginPage}/>

                </div>
            </div>
        </div>
    );
}

export default App;
