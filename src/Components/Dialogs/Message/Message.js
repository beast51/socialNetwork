import React from "react";
import './../Dialog.css';

let Message = (props) => {
    return (
        <div className="card mb-3">
            <div className={`card-body col-md-12 ${props.align}`}>
                <p className="card-text">{props.message}</p>
            </div>
        </div>
    )
};

export default Message;