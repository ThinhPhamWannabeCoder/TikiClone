import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";
import Form from "./Form";
import OrderOption from "./OrderOption";
import StoreOrderBadge from "./StoreOrderBadge";
import productApi from "../../../services/buyer.services";

interface propsType{
    product_id: number
    price: number,
    store_id: number,
}
interface storeType{
    storeId: number,
    name: string,
    orderNumber: number
}
export default function OrderForm(prop: propsType){
    // STORE_ID
    // console.log(prop)
    const [storeShort, setStoreShort] = useState<storeType|undefined>(undefined);

    useEffect(()=>{
        // Fetch store short info

       

    },[])
    const handleOder = () =>{
        // API
        // Redirect voi: state + product id, product_ images
    }
    const hanldeCart = ()=>{
        // API
    }
    // STAE


    // STORE ORDER

    // STATE ORDER
    // NUMBER
    // 

    return(
        <>
            <ContentBox class="w-3/12 h-full sticky top-2">
                <StoreOrderBadge storeId={prop.store_id}/>

                <OrderOption price={prop.price}/>

                <Form/>
            </ContentBox>
            
        </>
    )
}