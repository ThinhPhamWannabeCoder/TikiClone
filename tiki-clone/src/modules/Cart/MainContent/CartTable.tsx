import { DeviceTabletIcon, TrashIcon } from "@heroicons/react/24/outline";
import ContentBox from "../../../components/Common/ContentBox";
import CartCard from "./StoreCart/CartCard";
import { useEffect, useState } from "react";
import OrderStoreCard from "../../../components/Order/OrderStoreCard";
import StoreCart from "./StoreCart";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ProcessedCarts } from "../../../types/user.types";

interface propsType{
    handleDeleteStore: (storeId: number) => void,
    handleDeleteCart: (cartId: number) => void,

}
export default function CartTable(prop:propsType){
    
    const carts = useSelector((state:RootState)=>state.cart.view)
    console.log(carts)
    return (

        <>
            {
               carts.map(item=>{
                    return(
                        <StoreCart 
                            key={item.store.id} 
                            storeId={item.store.id} 
                            storeName={item.store.name}
                            data={item.cart}

                            handleDeleteStore={prop.handleDeleteStore}
                            handleDeleteCart={prop.handleDeleteCart}                            
                        />
                    )
                })
            }
        </>
   
       
    );
   
}

