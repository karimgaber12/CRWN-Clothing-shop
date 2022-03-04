/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactComponent as Logo } from '../../assests/crown.svg'
import {Link} from 'react-router-dom'
import './header.style.scss'
function Header() {
    return(
        <div className='header'>
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;