/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactComponent as Logo } from '../../assests/crown.svg'
 // this is a higher order component that take the component as an argument and return procedure
 // connect component allow us to get any properties from our reducers
 import { connect } from 'react-redux';
 import {Link} from 'react-router-dom'
import './header.style.scss'
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => ( // currentUser now will get it from root-reducer not app.js
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

                {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                   SIGN OUT
                 </div>
               ) : (
                  <Link className='option' to='/signin'>
                     SIGN IN
                </Link>
               )}
            </div>
             </div>
);

    // to get user-reducer from root-reducer and then get currentUser from user-reducer 
    const mapStateToProps = state => ({
        currentUser: state.user.currentUser
      });
      
export default connect(mapStateToProps)(Header);