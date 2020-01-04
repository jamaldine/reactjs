import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './header.css';
import SideNavigation from './SideNav/sideNav';

const navBar = (props) => {
    return <div className='bars'>
        <FontAwesome onClick={props.onOpenNav}
        name="bars" style={{color:'#dfdfdf', padding:'10px', cursor:'pointer'}} />
    </div>
}

const logo = () => (
    <Link className='logo' to='/'>
        <img alt="tennis" src="logoTennis.png" />
    </Link>
);

const Header = (props) =>{

    return (
        <div className='header'>
            <div>
                <SideNavigation {...props} />
            </div>
            <div className='headerOper'>
                {navBar(props)}
                {logo()}
            </div>
        </div>
    );

};



export default Header;