import {createSlice} from "@reduxjs/toolkit";
import Products from "../../data/products";

const initialState = {
    total: 0,
    Products
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        handleDecrement: (state,action) => {
            const productId = action.payload;
            state.Products = state.Products.map(product => {
                if (product.id === productId && product.count > 0) {
                  return { ...product, count: product.count - 1 };
                }
                return product;
              });
        },

        handleIncrement: (state,action) => {
            const productId = action.payload;
            state.Products = state.Products.map(product => {
                if (product.id === productId) {
                  return { ...product, count: product.count + 1 };
                }
                return product;
              });
        },
        removeProduct: (state,action) => {
            const productId = action.payload;
            state.Products = state.Products.filter(product => product.id !== productId);
        },
        selectTotalCost: (state,action) => {
          const totalCost = action.payload;
          state.total = totalCost.reduce((total, product) => total + product.price * product.count, 0)
        }
    
    }
})

export default cartSlice.reducer;

export const {handleDecrement, handleIncrement, removeProduct, selectTotalCost} = cartSlice.actions;
