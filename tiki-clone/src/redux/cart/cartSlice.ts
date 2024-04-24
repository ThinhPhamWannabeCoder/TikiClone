import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartType } from "../../types/user.types";


const initialState: CartType[] = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add:(state, action: PayloadAction<CartType[]>)=>{
            state.push(...action.payload)
        },
        remove: (state, action: PayloadAction<number>)=>{
            return state.filter(item=>item.id!=action.payload);
        },
        // update: (state, action)
    }
})
export const{add, remove} = cartSlice.actions;
export default cartSlice.reducer;