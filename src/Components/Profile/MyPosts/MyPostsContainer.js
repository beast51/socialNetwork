import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/es/connect/connect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {dispatch(updateNewPostTextActionCreator(text))},
        handleClick: () => {dispatch(addPostActionCreator())}
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);
