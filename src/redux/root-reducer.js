import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"; // for localStorage
import storage  from "redux-persist/lib/storage"; // for localStorage
// add user reducer in root reducer
import userReducer from "./user/user.reducer";
// add cart reducer in root reducer
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart'] // array containing the string names of any of the reducer that we wanna store
}
const rootReducer = combineReducers({
    // add user reducer in root reducer
    user:userReducer, // hanlded by firebase 
    // add cart reducer in root reducer
    cart:cartReducer,
    // add directory reducer in root reducer
    directory:directoryReducer,
    // add shop reducer in root reducer
    shop: shopReducer,
})
export default persistReducer(persistConfig, rootReducer);