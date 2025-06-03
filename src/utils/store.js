import { configureStore } from "@reduxjs/toolkit";
// import contactReducer from "./contactSlice";

import cartReducer from "./cartSlice";

const store = configureStore({
    reducer:{
        // contactslice:contactReducer,
        cart: cartReducer
    }
})

export default store;