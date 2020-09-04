import React from "react";
import logo from "../../assets/logo_inv.png";
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <a href="/" className='navbar-brand'><img src={logo} alt=""/>Network</a>
                    <button className="btn btn-outline-light" type="submit">Login</button>
                </div>
            </nav>
        </header>
    )
};

export default Header;
