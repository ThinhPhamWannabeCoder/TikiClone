import { DeviceTabletIcon, TrashIcon } from "@heroicons/react/24/outline";
import ContentBox from "../../../components/Common/ContentBox";
import CartCard from "./StoreCart/CartCard";
import { useEffect, useState } from "react";
import OrderStoreCard from "../../../components/Order/OrderStoreCard";
import StoreCart from "./StoreCart";

interface propsType{
    handleSelectedStore: (storeId: number) => void,
    handleDeleteStore: (storeId: number) => void,
    handleSelectedCart: (cartId: number) => void,
    handleDeleteCart: (cartId: number) => void,
    selectedCarts: number[]
    selectedStores: number[],
    data: object[]
    //carts: object[],
}
export default function CartTable(prop:propsType){
    
    useEffect(()=>{
        
    },[])
    
  
    return (

        <>
            {
                prop.data.map(item=>{
                    return(
                        <StoreCart 
                            key={item.store.id} 
                            storeId={item.store.id} 
                            storeName={item.store.name}
                            handleSelectedCart={prop.handleSelectedCart}
                            handleSelectedStore={prop.handleSelectedStore}
                            selectedStores={prop.selectedStores}
                            data={item.cart}
                            selectedCarts={prop.selectedCarts}
                            handleDeleteStore={prop.handleDeleteStore}
                            handleDeleteCart={prop.handleDeleteCart}                            
                        />
                    )
                })
            }
        </>
   
       
    );
   
}


interface cartByStore{
    store_id: number,
    name: string,
    product:
        {
            id: number,
            name: string,
            quantity: number,
            price: number
        }[]
    
}

const data:cartByStore[]=[
    {
        store_id: 1,
        name: "Apple",
        product:[
            {
            id:1,
            name: "iphone",
            quantity: 200,
            price: 340.000,
            },
            {
                id:2,
                name: "ipad",
                quantity: 300,
                price: 340.000,
            },
        ]
    },
    {
        store_id: 2,
        name: "Samsung",
        product:[
            {
                id:3,
                name: "Samsung A52",
                quantity: 150,
                price: 340.000,
            },
            {
                id:4,
                name: "Samsung A40",
                quantity: 180,
                price: 340.000,
            },
        ]
    }
]