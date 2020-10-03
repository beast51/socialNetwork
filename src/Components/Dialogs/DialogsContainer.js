import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/es/connect/connect";
import React from "react";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newMessageText) => {
            dispatch(updateNewMessageTextActionCreator(newMessageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;