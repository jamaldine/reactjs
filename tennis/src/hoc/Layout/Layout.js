import React from 'react';

import Header from '../../components/Header/header';
import './layout.css';

class Layout extends React.Component {
        
    state={
        showNav:false,
    }
    
    
    toggleSideNav(action) {
        this.setState({
            showNav:action,
        })
    }

    render(){
        return (
            <div>
                <Header showNav={this.state.showNav}
                        onOpenNav={()=>this.toggleSideNav(true)}
                        onCloseNav={()=>this.toggleSideNav(false)}
                 />
                {this.props.children}
                footer
            </div>
        );
    }
};

export default Layout;