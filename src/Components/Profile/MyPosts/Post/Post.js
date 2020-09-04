import React from "react";
import './Post.css';
import avatar from '../../../../assets/avatar.png'
import like from '../../../../assets/like.png'

const Post = (props) => {
    return (
        <div className="post">
            <div className="card mb-3 w-90 mt-3 shadow-sm">
                <div className="card-header card-header_post">
                    <div className="row justify-content-between">
                        <div className="post__img col-5 col-md-2 col-lg-2 text-center">
                            <img src={avatar} className="card-img card-img_round" alt="avatar"/>
                            <h6>Юрий</h6>
                        </div>
                        <div className="col-4 col-md-2 col-lg-2 text-center pt-1">
                            <a href="/">
                                <img className="card-img_like " src={like} alt="like"/>
                                <h6>{props.likesCount}</h6>
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
