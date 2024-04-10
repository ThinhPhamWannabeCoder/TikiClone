
import { useEffect, useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";
import { useNavigate } from "react-router-dom";

interface propsType{
    data: object[],
    selectedCarts: number[],
}

export default function SideBar(prop: propsType){
    const [sumPrice, setSumPrice] = useState<number>(0)
//  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
// Delievery to will have to delievy contact and sumprice will have the delivery price added to calculate at their
    const navigate = useNavigate();
    const OrderHandler = ()=>{
        // console.log(prop.data.filter(item=>prop.selectedCarts.includes(item.id)))
        // SET REDUX
        const orderData = prop.data.filter(item=>prop.selectedCarts.includes(item.id)).map(item=> {
            return {
                id: item.id,
                productId: item.product.id,
                quantity: item.quantity,
                // userId: redux - if needed
            }
        })
        console.log(orderData)
        // navigate("/user")
    }
    useEffect(()=>{
        let sum = 0;

        prop.data.filter(item=>prop.selectedCarts.includes(item.id)).forEach(item=>{
            sum+= item.quantity * item.product.price
        })

        setSumPrice(sum)

    },[prop.selectedCarts])
    

    return(
        <div className="flex flex-col gap-3 w-1/5">
            <DeliveryTo/>
            {/* [{ProductPrice & Produce Quantity}] */}
            <SumPrice
                sumPrice={sumPrice}
            />
            {/* List activate product -> to set order Package */}
            <PrimaryButton 
                name="Mua hàng"
                fnc={OrderHandler}
            />
        </div>
    )
}