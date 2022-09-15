import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    fetchCategoryLoading: false,
    fetchCategorySuccess: [],
    fetchCategoryError: '' 
}

export const fetchCategory= createAsyncThunk('category/fetchCategory', ()=>{
    return axios.get('https://fakestoreapi.com/products')
    .then(response=> response.data
    )
    
})

const categorySlice = createSlice({
    name:'category',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending, (state)=>{
            state.fetchCategoryLoading= true
        })

        builder.addCase(fetchCategory.fulfilled, (state,action)=>{
            state.fetchCategoryLoading= false
            state.fetchCategorySuccess= action.payload
            state.fetchCategoryError=''
        })

        builder.addCase(fetchCategory.rejected, (state,action)=>{
            state.fetchCategoryLoading= false
            state.fetchCategorySuccess=[]
            state.fetchCategoryError= action.error.message
        })
    }
}) 


export default categorySlice.reducer