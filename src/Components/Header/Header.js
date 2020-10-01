import React from "react";
import logo from "../../assets/logo_inv.png";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <NavLink to="/" className='navbar-brand'><img src={logo} alt=""/>
                        <span>Network</span>
                    </NavLink>
                    <NavLink to="/login" className="col-3 col-sm-1 mr-sm-4">
                        <button className="btn btn-outline-light" type="submit">
                            {props.isAuth ? props.login : "Login"}
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Header;
