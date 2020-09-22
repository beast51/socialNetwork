import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


function App(props) {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <Navbar/>
                    <Route path="/profile" render={() => <Profile state={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.dialogsPage}
                                                                  updateNewMessageText={props.updateNewMessageText}
                                                                  addMessage={props.addMessage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </div>
    );
}

export default App;
