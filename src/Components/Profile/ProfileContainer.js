import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7925;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    }
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);


