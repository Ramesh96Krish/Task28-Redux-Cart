import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice";


const myStore = configureStore({
    reducer: {
        cart: cartSlice,
    },
})

export default myStore;