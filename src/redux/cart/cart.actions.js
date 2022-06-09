/* eslint-disable no-unused-vars */
// create cart reducer to useIt when i click on cartIcon the cartDropdown it will be hidden or visible by boolean data
export const ToggleCartHidden = () =>({
    type: "TOGGLE_CART_HIDDEN",
    
})

// create addItem action to get values from payload as an item
export const addItem = item => ({
    type: "ADD_ITEM",
    payload:item,
})

// create removeItem from x action to get values from payload as an item

export const clearItemFromCart = item => ({
    type: "CLEAR_ITEM_FROM_CART",
    payload: item
  });

// create removeItem from arrows action  to get values from payload as an item

  export const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload: item
  });
  