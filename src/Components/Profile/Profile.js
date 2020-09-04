import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
            <div>Ava + discription</div>
           <MyPosts/>
        </main>
    )
};

export default Profile;
