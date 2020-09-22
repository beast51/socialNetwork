import React from "react";
import './Post.css';
import avatar from '../../../../assets/avatar.png'
import like from '../../../../assets/like.png'

const Post = (props) => {
    return (
        <div className="post">
            <div className="card mb-3 w-90 mt-3 shadow-sm">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6 text-left">
                            <img src={avatar} className="card-img card-img_round" alt="avatar"/>
                            <span>Юрий</span>
                        </div>
                        <div className="col-6 text-right">
                            <a href="/">
                                <img className="card-img_like " src={like} alt="like"/>
                                <span>{props.likesCount}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body w-90">
                    <p className="card-text">{props.message}</p>
                </div>
            </div>
        </div>
    )
};

export default Post;
