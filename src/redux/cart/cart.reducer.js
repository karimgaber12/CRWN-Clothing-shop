/* eslint-disable no-unused-vars */
import { addItemToCart, removeItemFromCart } from './cart.utils';

// create cart reducer to useIt when i click on cartIcon the cartDropdown it will be hidden or visible by boolean data

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
};

const cartReducer = (state = INITIAL_STATE , action) =>{
    switch (action.type) {
        // create hidden toggle case with redux
        case "TOGGLE_CART_HIDDEN":
            return{
                ...state,
                hidden: !state.hidden // if it is true return false and if it is false return true
            }
        // create cartItems data with redux to store in reducer and use it after that
        case "ADD_ITEM":
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)// return current or existing cartItem and any action come with it like a data
            }
            // remove items from arrows
            case "REMOVE_ITEM":
             return {
           ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
             };
             
             // remove items from x
            case "CLEAR_ITEM_FROM_CART":
                return {
                  ...state,
                  cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                  )
                };
              default:
                return state;
            }        
}
export default cartReducer