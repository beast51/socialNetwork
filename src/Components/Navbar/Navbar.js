import React from "react";
import './Navbar.css';

const Navbar = () => {
    const menu = {'Profile': '/profile', 'Messages': '/dialogs', 'News': '/news', 'Music': '/music', 'Settings': '/settings'};
        return (
        <aside className="col-3 col-md-2 aside ">
            <ul>
                {Object.keys(menu).map((item, index) =>
                    <li key={index}><a href={menu[item]}>{item}</a></li>
                )}
            </ul>
        </aside>
    )
};

export default Navbar;
