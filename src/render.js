import React from 'react';
import {render} from 'react-dom';
import './index.css';
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



