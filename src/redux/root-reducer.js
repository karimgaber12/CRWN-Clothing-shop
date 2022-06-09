import { combineReducers } from "redux";
// add user reducer in root reducer
import userReducer from "./user/user.reducer";
// add cart reducer in root reducer
import cartReducer from "./cart/cart.reducer"
export default combineReducers({
    // add user reducer in root reducer
    user:userReducer,
    // add cart reducer in root reducer
    cart:cartReducer
})