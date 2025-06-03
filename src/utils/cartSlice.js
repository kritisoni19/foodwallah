import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItemsCart :(state,action)=>{
            state.items.push(action.payload);
        }
    }
})
export const { addItemsCart } = cartSlice.actions;
export default cartSlice.reducer;