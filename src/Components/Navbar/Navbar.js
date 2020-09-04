import React from "react";
import './Navbar.css';

const Navbar = () => {
    const menu = ['Profile', 'Messages', 'News', 'Music', 'Settings'];
    return (
        <aside className="col-3 col-md-2 aside ">
            <ul>
                {menu.map((item, index) =>
                    <li key={index}><a href="">{item}</a></li>
                )}
            </ul>
        </aside>
    )
};

export default Navbar;
