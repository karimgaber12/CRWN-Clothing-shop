/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import "./cart-dropdown.style.scss";

const CartDropdown = ({cartItems ,history, dispatch }) => (
  
    <div className='cart-dropdown'>
    <div className='cart-items'>
      { cartItems.length ? (
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))) 
      : (<span className='empty-message'>your cart is empty</span>)
      }
    </div>      
    <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(ToggleCartHidden());
          }}
          >
            Go to checkout</CustomButton>
    </div>

)


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));