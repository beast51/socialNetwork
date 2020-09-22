import React from "react";
import './Dialog.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} align={m.align} key={m.id}/>);
    let newMessageElement = React.createRef();
    let addMessage = (event) => {
        event.preventDefault();
        props.addMessage();
    };

    let onMessageChange = () => {
        props.updateNewMessageText(newMessageElement.current.value);
    };
    return (
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        {dialogsElements}
                    </div>
                    <div className="col-10">
                        {messagesElements}
                        <form>
                            <div className="input-group mb-3">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Write message..."
                                       aria-label="Recipient's username"
                                       aria-describedby="button-addon2"
                                       ref={newMessageElement}
                                       value={props.state.newMessageText}
                                onChange={onMessageChange}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary"
                                            type="button"
                                            id="button-addon2"
                                            onClick={addMessage}>Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Dialogs;