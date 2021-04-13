import React from 'react';
import { NavLink } from 'react-router-dom';
import headerStyle from './Header.module.css'

const Header = (props) => {
    return (
        <div className={headerStyle.header}>
            Header
            <div className={headerStyle.header__login}>
                {props.isAuth ? props.login
                    : <NavLink to={'login'}>Login</NavLink>
                }
                
            </div>
        </div> 
    )
}

export default Header