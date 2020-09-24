import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                              key={p.id}/>);
    let newPostElement = React.createRef();

    let handleClick = (e) => {
        e.preventDefault();
        props.handleClick();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="myPosts">My posts</label>
                    <textarea className="form-control w-90"
                              id="myPosts"
                              rows="3"
                              ref={newPostElement}
                              value={props.profilePage.newPostText}
                              onChange={onPostChange}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary" onClick={handleClick}>Add post</button>
            </form>
            {postsElement}
        </div>
    )
};

export default MyPosts;
