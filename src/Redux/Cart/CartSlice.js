import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  numberOfItems: 0,
  cartTotalAmount: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >=0) {
        state.cartItems[itemIndex].cartQuantity += 1
      }else{
        const tempProduct ={...action.payload, cartQuantity:1}
      state.cartItems.push(tempProduct)
    };
    },
    removeItem: (state, action)=>{
        const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
        if(itemIndex >=0){
            state.cartItems[itemIndex].cartQuantity -=1
        }else{
            
            console.log('No item in your cart')
        }
    }
  },
});

export default CartSlice.reducer;
export const { addToCart, removeItem } = CartSlice.actions;
