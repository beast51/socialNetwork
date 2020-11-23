import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

const initialState = {
    posts: [
        {id: 0, message: "Hello, how are you?", likesCount: 15},
        {id: 1, message: "This is my first post.", likesCount: 25}
    ],
    newPostText: '',
    userProfile: null,
    profileStatus: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
              ...state, userProfile: action.userProfile
            };
        case SET_PROFILE_STATUS:
            return {
              ...state, profileStatus: action.profileStatus
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});


export const getUserProfile = (userId) => {
  return (
      (dispatch) => {
          usersAPI.getUserProfile(userId).then(data => {
              dispatch(setUserProfile(data));
          });
      }
  )
};

export const getProfileStatus = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getProfileStatus(userId).then(data => {
                dispatch(setProfileStatus(data))
            })
        }
    )
};

export const updateProfileStatus = (profileStatus) => (dispatch) => {
    profileAPI.updateProfileStatus(profileStatus).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(profileStatus));
        }

    })
};



export default profileReducer;