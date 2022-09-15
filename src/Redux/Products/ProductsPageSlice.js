
import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState={
    fetchProductLoading: false,
    fetchProductSuccess: [],
    fetchProductError: ''
}

export const fetchProducts=createAsyncThunk('product/fetchProducts', ()=>{
    return axios.get('https://fakestoreapi.com/products')
    .then(response=>response.data)
})

const productPageSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.fetchProductLoading= true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.fetchProductLoading=false
            state.fetchProductSuccess= action.payload
            state.fetchProductError=''
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.fetchProductLoading=false
            state.fetchProductSuccess=[]
            state.fetchProductError= action.error.message
        })
    }

})

export default productPageSlice.reducer