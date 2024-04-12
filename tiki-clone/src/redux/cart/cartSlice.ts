import { createSlice } from "@reduxjs/toolkit";

interface Cart{
    id: number,
    userId: number,
    productId: number,
    quantity: number,
    
}
const initialState: Cart={
    id: 1,
    userId: 1,
    productId: 1,
    quantity: 200
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        order:(state) =>{
            console.log(state.productId)
        }
    }
})
export const{order} = cartSlice.actions;
export default cartSlice.reducer;