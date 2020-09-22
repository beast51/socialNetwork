import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
    let newPostElement = React.createRef();
    let handleClick = (event) => {
        event.preventDefault();
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                              value={props.state.newPostText}
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
