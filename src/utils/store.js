import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import incredecreReducer from "./IncrDecreBtnSlice";
 
const store = configureStore({
    reducer:{
        contactslice:contactReducer,
        incredecrementSlice:incredecreReducer
    }
})

export default store;