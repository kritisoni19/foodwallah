import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

const store = configureStore({
    reducer:{
        contactslice:contactReducer
    }
})

export default store;