import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name:'contactslice',
    initialState:{
        items:['show','dfdfd']
    },
    reducers:{
        addItems: (state,action)=>{
            state.items.push(action.payload);
        }
    }
})


export const {addItems} = contactSlice.actions;
export default contactSlice.reducer;