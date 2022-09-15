
import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from './Category/CategorySlice'
import productReducer from './Products/ProductsPageSlice'
import CartReducer from './Cart/CartSlice'
const store= configureStore({
    reducer:{
    category: categoryReducer,
    product: productReducer,
    cart: CartReducer
    }
})

export default store;