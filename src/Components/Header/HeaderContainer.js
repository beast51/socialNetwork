import React from "react";
import './Header.css';
import Header from "./Header";
import {authUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default compose(
    connect(mapStateToProps, {authUser})
)(HeaderContainer);


