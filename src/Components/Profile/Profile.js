import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </main>
    )
};

export default Profile;
