import React from "react";
import "./cart-icon.style.scss";
import {ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import {ToggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
const CartIcon = ({ToggleCartHidden,itemCount  }) =>(
    
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount }</span>
    </div>
)
// to dispatch ToggleCartHidden from reducer in CartIcon
const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
  });
// use selector for update count of shopping cart when you add more products
  const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);