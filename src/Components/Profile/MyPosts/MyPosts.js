import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="myPosts">My posts</label>
                    <textarea className="form-control w-90" id="myPosts"
                              rows="3">
                    </textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Add post</button>
            </form>
            <Post message="Hello, how are you?" likesCount='15'/>
            <Post message="This is my first post" likesCount='25'/>
        </div>
    )
};

export default MyPosts;
