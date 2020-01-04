import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNav_items';

const Items=[
    {}
];
const SideNavigation = (props) => {
    
    return (
        <SideNav showNav={props.showNav} 
                navStyle={{background:'#242424', maxWith:'220px'}}
                onHideNav={props.onCloseNav}
        >
            <SideNavItems {...props}/>
           
        </SideNav>
    );
};

export default SideNavigation;