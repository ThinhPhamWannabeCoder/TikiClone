import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType, Order } from "../../types/user.types";

interface OrderState{
    carts: CartType[],
    orders: Order[],
    deliveryId: number|undefined,
    deliveryPrice: number| undefined,
    addressId: number|undefined,
    paymentId: number|undefined,
    userId: number|undefined
}
// DELIVERY TYPE -> FOR CALCULATING DELIVERY PRICE
const initialState:OrderState = {
    userId: undefined, 
    paymentId: undefined,
    deliveryId:undefined, 
    deliveryPrice: undefined,
    addressId: undefined, 
    carts:[], 
    orders: [], 
    
    
}


const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        init:(state, action: PayloadAction<{ data: {userId: number, carts: CartType[]}}>)=>{
            state.userId = action.payload.data.userId;
            // state.deliveryId = action.payload.data.deliveryId;
            // state.addressId = action.payload.data.addressId;
            // state.paymentId = action.payload.data.paymentId;
            state.carts = action.payload.data.carts;
            state.orders = processOrder(action.payload.data.carts);
            // console.log(action.payload.data)
        },
        updateDelivery:(state, action: PayloadAction<{data:{id: number, price: number}}>)=>{
            state.deliveryId = action.payload.data.id;
            state.deliveryPrice = action.payload.data.price;
            state.orders.forEach(item => {
                item.deliveryCost = action.payload.data.price
            })
        },
        updateAddress: (state, action: PayloadAction<number>) =>{
            state.addressId = action.payload;
        },
        updatePayment: (state, action: PayloadAction<number>) =>{
            state.paymentId = action.payload
        }
    }
})
export const {init, updateDelivery,  updateAddress, updatePayment} = orderSlice.actions
export default orderSlice.reducer

const processOrder = (data: CartType[]):Order[]=>{
    const groupedData = data.reduce((acc, item) => {
        const { store, ...rest } = item;
        const key = store.id; // Group by store id
      
        if (!acc[key]) {
          acc[key] = { storeId: store.id,  deliveryCost: undefined, products: [] };
        }
      
        acc[key].products.push({
            id: rest.product.id,
            quantity: rest.quantity,
            price: rest.product.price
        });
        return acc;
      }, {});
      
      return Object.values(groupedData);
}