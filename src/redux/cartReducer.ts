import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

type State = {
    [id:number]:number
}

const initialState:State = {
    
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addPostToCart:(state, action)=>({
            ...state,
            [action.payload.id]:(state[action.payload.id] || 0)+action.payload.count
        }),
        removePostFromCart:(state,action)=>{
            return omit(state, action.payload)
        },
        
    }
})

export const {addPostToCart,removePostFromCart} = cartSlice.actions

export default cartSlice.reducer