import React from 'react';
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

export let rerenderEntireTree = (state) => {
    render(
        <BrowserRouter>
            <App dialogsPage={state.dialogsPage}
                 profilePage={state.profilePage}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
                 addMessage={addMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
