import React from 'react';
import './Menu.css';
import logo from '../asset/logo-home.png'


class Menu extends React.Component{
    render(){
        return(
            <div>
                <div className='header'>
                    <ul className='menu'>
                        <li><a href=' '><img src={logo} alt=""/></a></li>
                        <li><a href=' '>Home</a></li>
                    </ul>  
                </div>
            </div>
        )
    }
}

export default Menu
