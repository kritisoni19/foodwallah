import { createSlice } from "@reduxjs/toolkit";


const IncrDecreBtnSlice = createSlice({
    name:'incredecrementSlice',
    initialState:{
        showItems:[]
    },
    reducers:{
        incrementItems: (state,action)=>{
            state.showItems.push(action.payload);
        }
    }
})

export const {incrementItems} =  IncrDecreBtnSlice.actions;
export default IncrDecreBtnSlice.reducer;