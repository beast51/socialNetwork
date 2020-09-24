import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </main>
    )
};

export default Profile;
