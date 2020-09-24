import React from "react";
import './Dialog.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };

                    let onMessageChange = (newMessageText) => {
                        store.dispatch(updateNewMessageTextActionCreator(newMessageText));
                    };
                    return (
                        <Dialogs updateNewMessageText={onMessageChange}
                                 addMessage={addMessage}
                                 dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;