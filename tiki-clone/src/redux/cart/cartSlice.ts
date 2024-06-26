import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartType, ProcessedCarts } from "../../types/user.types";

// PRECAUTION: I'M USING AUTOMATIC RETURNING NEW STATE iN REDUX IMMER, THE CODE BELLOW IS NOT RECOMMEDED
const initialState:{
    view: ProcessedCarts[],
    raw: CartType[],
    selectedCarts: number[],
    selectedStores: number[],
    all: boolean
} = {view: [], raw:[], selectedCarts:[], selectedStores: [], all: false}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        init:(state, action: PayloadAction<CartType[]>)=>{
            const holder:CartType[] = action.payload
            state.raw = action.payload
            state.view = processCart(holder)

        },
        selectCart: (state, action: PayloadAction<number>) => {
            const cartId = action.payload;
            const isSelected = state.selectedCarts?.includes(cartId);
            if (isSelected) {
                state.selectedCarts = state.selectedCarts?.filter(id => id !== cartId) ?? [];
            } else {
                state.selectedCarts = [...(state.selectedCarts ?? []), cartId];
            }
            // if(state.view.every(item => item.store.id))
            state.view.forEach(item=>{
                if(item.cart.every(cart=>state.selectedCarts.includes(cart.id))){
                    state.selectedStores.push(item.store.id)
                }
                else{
                    state.selectedStores = state.selectedStores.filter(id => id != item.store.id)
                }
            })
            if(state.raw.every(item=>state.selectedCarts.includes(item.id))){
                state.all = true
            }
            else{
                state.all=false
            }
          },
          
        selectStore: (state, action:PayloadAction<number>)=>{
            const storeId = action.payload;
            const isSelectedStore = state.selectedStores?.includes(storeId);
            if(isSelectedStore){
                state.selectedStores = state.selectedStores?.filter(id => id!==storeId)??[];
                const storeCartIds = (state.raw?.filter(item=>item.store.id === storeId)??[]).map(item => item.id)
                state.selectedCarts =  state.selectedCarts?.filter(id => !storeCartIds.includes(id))
            }
            else{
                state.selectedStores = [...(state.selectedStores ?? []), storeId]
                const storeCartIds = (state.raw?.filter(item=>item.store.id === storeId)??[]).map(item => item.id)
                const currentSelectedCarts = state.selectedCarts?.filter(id => !storeCartIds.includes(id)) ?? [];
                state.selectedCarts =  [...currentSelectedCarts, ...storeCartIds]
            }
            if(state.raw.every(item=>state.selectedCarts.includes(item.id))){
                state.all = true
            }
            else{
                state.all=false
            }
        },
        selectAll: (state )=>{
            const newAllState = state.all ? false : true;
            // console.log(newAllState)
            // console.log(state.view)
            // state.view.forEach(item=>console.log(item))
            if(newAllState){
                if(state.raw.length>0){
                    console.log(state.raw.length)
                    const allStoreId = state.view.map(item => item.store.id)
                    const allProduct = state.raw.map(item => item.id)
                    state.selectedCarts=allProduct
                    state.selectedStores=allStoreId
                    state.all = newAllState

                }
                
            }
            else{
                state.selectedCarts=[];
                state.selectedStores=[]
                state.all = newAllState

            }
            

        },
        update: (state, action:PayloadAction<{cardId: number, quantity: number}>)=>{
            // console.log("check")
            const holder:CartType[] = state.raw.map(item=>{
                if(item.id == action.payload.cardId){
                    item.quantity = action.payload.quantity
                }
                return item
            })
            state.raw =holder
            state.view = processCart(holder)
        },
        deleteCart: (state, action:PayloadAction<number>)=>{
            const cartId = action.payload;

            // DELETE SELECTED CART, DELETED SELECTED STORE 
            const newSeletedCarts = state.selectedCarts.filter(id => id != cartId)

            const rawHolder = state.raw.filter(item=>item.id!=cartId)
            const viewHolder =processCart(rawHolder)
            // if()
            // const newStoreId = s
            viewHolder.forEach(item=>{
                if(item.cart.every(cart=>newSeletedCarts.includes(cart.id))){
                    if(!state.selectedStores.includes(item.store.id)){
                        state.selectedStores.push(item.store.id)
                    }
                }
                else{
                    state.selectedStores = state.selectedStores.filter(id => id != item.store.id)
                }
            })
            if(rawHolder.every(item=>newSeletedCarts.includes(item.id))){
                state.all = true
            }
            else{
                state.all=false
            }
            if(rawHolder.length==0){
                state.all=false
            }
            state.selectedCarts = newSeletedCarts
            state.raw=rawHolder
            state.view= viewHolder
            
        },
        deleteCartByStore: (state, action:PayloadAction<number>)=>{
            const storeId = action.payload;

            const rawHolder = state.raw.filter(item=>item.store.id!=storeId)
            const viewHolder = processCart(rawHolder)

            const newSelectedStore = state.selectedStores.filter(id => id != storeId)
            const discardCards = (state.raw.filter(item=>item.store.id==storeId)).map(item=>item.id)

            // const newSelectedStore = state.selectedStores.filter(id => id != storeId)
            const newSeletedCarts = state.selectedCarts.filter(id=>!discardCards.includes(id))
            if(rawHolder.every(item=>newSeletedCarts.includes(item.id))){
                state.all = true
            }
            else{
                state.all=false
            }
            if(rawHolder.length==0){
                state.all=false
            }
            state.selectedCarts = newSeletedCarts
            state.selectedStores=newSelectedStore
            state.raw=rawHolder
            state.view= viewHolder

        },
        deleteAll: (state)=>{
            return {
                ...state,
                view: [],
                raw: [],
                selectedCarts: [],
                selectedStores: [],
                all: false,
              };
        },

    }
})
export const {   init, 
                update, 
                selectCart,
                selectStore,
                selectAll,
                deleteCart,
                deleteCartByStore,
                deleteAll
            } = cartSlice.actions;
export default cartSlice.reducer;


const processCart = (data:CartType[]):ProcessedCarts[]=>{
    const groupedData = data.reduce((acc, item) => {
        const { store, ...rest } = item;
        const key = store.id; // Group by store id
      
        if (!acc[key]) {
          acc[key] = { store, cart: [] };
        }
      
        acc[key].cart.push(rest);
        return acc;
      }, {});
      
      return Object.values(groupedData);
      
}
