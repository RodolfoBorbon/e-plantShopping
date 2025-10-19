import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; // Destructure product details from the action payload
        const existingItem = state.items.find(item => item.name === name); // Check if the item already exists in the cart by comparing names
        if (existingItem) {
            existingItem.quantity++; // If item already exists in the cart, increase its quantity
        } else {
            state.items.push({name, image, cost, quantity: 1}); // If item does not exist, add it to the cart with quantity 1
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        const itemToUpdate = state.items.find(item => item.name = name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
        }    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;  // Used by: Components, Purpose: To interact with the store (send actions)

export default CartSlice.reducer; //Used by: The Redux store, Purpose: To know how to handle received actions
