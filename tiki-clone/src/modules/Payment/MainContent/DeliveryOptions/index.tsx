import { useEffect, useState } from "react";
import ContentBox from "../../../../components/Common/ContentBox";
import PrimaryTitle from "../../../../components/Title/PrimaryTitle";
import DeliveryOptionList from "./DeliveryOptionList";
import ProductOrderList from "./ProductOrderList";
import productApi from "../../../../services/buyer.services";
import { DeliveryOptionsType } from "../../../../types/user.types";
import { useDispatch } from "react-redux";
import { updateDelivery } from "../../../../redux/order/orderSlice";

interface Delivery{
    name: string,
    duration: string,
    base_price: number,
    short_description: string,
    description: string
}

export default function DeliveryOptions(){
     // ORDER REDUX
     const [selectedOption, setSelectedOption] = useState<number>();
     const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOptionsType[]>()
     const [delivery, setDelivery] = useState<Delivery>();
     // DISPATCH REDUX
 
     const dispatch = useDispatch();
 
     // HANDLE DELIVERY CHANGE
     
     // USE EFFECT
     useEffect(()=>{
         productApi.getDeliveries()
             .then(res =>{
                 setDeliveryOptions(res.data)
                 res.data.forEach(item=>{
                     if(item.default == true){
                         setSelectedOption(item.id)
                     }
                 })
             })
             .catch(err => {
                 console.log(err.message)
             })
     },[])
     useEffect(()=>{
        deliveryOptions?.forEach(item=>{
            if(item.id===selectedOption){
                setDelivery({
                    name: item.name,
                    duration: item.duration,
                    short_description: item.short_description,
                    description: item.description,
                    base_price: item.base_price
                })
                dispatch(updateDelivery({
                    data:{
                        id: item.id,
                        price: item.base_price
                    }
                }))
            }
        })
     },[selectedOption])
     if(!delivery){
        return "waiting"
     }

    return(
        <ContentBox class="flex flex-col gap-3">
            <PrimaryTitle name="Chọn hình thức giao hàng"/>
            <DeliveryOptionList deliveryOptions={deliveryOptions as DeliveryOptionsType[]} selectedOption={selectedOption as number} setSelectedOption={setSelectedOption}/>
            <ProductOrderList delivery={delivery as Delivery}/>
        </ContentBox>
    )
}