
import React from 'react';

import DrawerToggleButton from './SideDraw/DrawerToggleButton';


const nav = props => (
    <header className="nav">
        <nav className="navbar_navigation">
            <div className="nav-toggle-btn">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="nav-logo"><a href="/">THE LOGO</a></div>
            {/* spacer takes all the available space */}
            <div className="spacer"></div>
            <div className="nav-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                    <li><a href="/">Signin</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default nav;