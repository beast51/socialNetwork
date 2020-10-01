import React from "react";
import './Header.css';
import Header from "./Header";
import * as axios from "axios";
import {setUserAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserAuthData({id, email, login});
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);
