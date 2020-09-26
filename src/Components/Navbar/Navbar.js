import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const menu = {'Profile': '/profile', 'Messages': '/dialogs', 'Users': '/users', 'News': '/news', 'Music': '/music', 'Settings': '/settings'};
        return (
        <aside className="col-3 col-md-2 aside ">
            <ul>
                {Object.keys(menu).map((item, index) =>
                    <li key={index}><NavLink to={menu[item]}>{item}</NavLink></li>
                )}
            </ul>
        </aside>
    )
};

export default Navbar;
