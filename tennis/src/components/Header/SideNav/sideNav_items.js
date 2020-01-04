import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
 
import './sideNav.css';

const SideNavItems = (props) => {
   
    const items = [
        {
            link:'/',
            text:'Home',
            name:'home',
            type:'option',
        },
        {
            link:'/news',
            text:'News',
            name:'file-text-o',
            type:'option',
        }
    ];
    
    const showItems=()=>{
        return items.map((item,i)=>{
            return <div key={i} className={`${item.type}`} >
                <Link onClick={props.onCloseNav} to={`${item.link}`}>
                    <FontAwesome name={`${item.name}`} />
                    {`${item.text}`}
                </Link>
            </div>
        })
    }
    

    return (
        <div>
            {showItems()}
        </div>
    );
};


export default SideNavItems;