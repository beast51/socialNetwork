import React from "react";
import './ProfileInfo.css';
import Preloader from "../../common/Preloader/Preloader";
import lookingForAJobPhoto from "../../../assets/lookingforajob1.jpg";
import iHaveAJobPhoto from "../../../assets/ihaveajob1.jpg";
import avatar from './../../../assets/avatar.jpg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className="container mb-5">
            <div className="row justify-content-center ">
                <div className="text-center">
                    <img className="rounded w-50 mb-3"
                         src={props.userProfile.photos.large ? props.userProfile.photos.large : avatar} alt=""/>
                    <h2>{props.userProfile.fullName}</h2>
                    <h6 className="">{props.userProfile.aboutMe}</h6>
                    <ProfileStatus profileStatus={props.profileStatus} updateProfileStatus={props.updateProfileStatus}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 col-12 text-center mb-3">
                    <h5>About work:</h5>
                    <img className="w-50 mb-2"
                         src={props.userProfile.lookingForAJob === true ? lookingForAJobPhoto : iHaveAJobPhoto} alt=""/>
                    <h6>{props.userProfile.lookingForAJobDescription}</h6>
                </div>
                <div className="col-md-6 col-12 text-center">
                    <h5>My contacts:</h5>
                    {Object.keys(props.userProfile.contacts).map(c => {
                        if (props.userProfile.contacts[c] !== null) {
                            return <a key={c} href={`${props.userProfile.contacts[c]}`}>{c}</a>
                        } else return null
                    })}
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
