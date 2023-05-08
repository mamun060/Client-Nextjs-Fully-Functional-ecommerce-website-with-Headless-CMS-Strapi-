import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


export default configureStore({
    reducer: {
        cartValue: cartSlice,
    },
})