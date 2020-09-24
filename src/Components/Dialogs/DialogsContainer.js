import React from "react";
import './Dialog.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (newMessageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageText));
    };
    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={addMessage}
                 dialogsPage={state}/>
    )
};

export default DialogsContainer;