import { createSlice } from "@reduxjs/toolkit";


const initialState = [];


const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {

        addItem: (state, action) => {
            
            const incoming = action.payload;
    
            // Check if item already exists in initialstate
            const existingItem = state.find(item => item.name === incoming.name);
            if (existingItem) {
                
                existingItem.quantity += incoming.quantity;
                existingItem.price = existingItem.pricePerQuantity * existingItem.quantity;
            } 
            else {
                // if not push to the inintialstate
                state.push(incoming);
            }
        },

        removeItem: (state, action) => {
            
            return state.filter(item => item.id != action.payload)
        }
    }
})


export const getTotalPrice = (state) => {
    // gives each item from cart 
    return state.cart.reduce((total, item) => {
        // picked an item from cart and added with their price
        return total + item.price
    }, 0)   // total = 0
}

export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer