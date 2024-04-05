import { TrashIcon } from "@heroicons/react/24/outline";
import ContentBox from "../../../../components/Common/ContentBox";
import OrderProductFirstSection from "../../../../components/Order/OrderDetail/OrderProductFirstSection";
import OrderProductPrice from "../../../../components/Order/OrderDetail/OrderProductPrice";
import OrderProductQuantity from "../../../../components/Order/OrderDetail/OrderProductQuantity";
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection";
import { useEffect, useState } from "react";
interface productCart{
    id: number,
    name: string,
    quantity: number,
    price: number,

    
}
export default function CartCard(prop: productCart){
    const [finalPrice, setFinalPrice] = useState<number>(prop.price*prop.quantity)
    useEffect(()=>{
        setFinalPrice(prop.price*prop.quantity)
    },[prop.quantity])
    return (
        <div className="py-4 grid grid-cols-9">

            <OrderProductFirstSection class="flex gap-1">
                <input type="checkbox" name="" id="" className="cursor-pointer" />
                <p>{prop.name}</p>
            </OrderProductFirstSection>
            <OrderProductPrice>
                <p>{prop.price}</p>
            </OrderProductPrice>

            <OrderProductQuantity>
                <p>{prop.quantity}</p>
            </OrderProductQuantity>
            <OrderProductFinalSection class="flex justify-between items-center">
                <p>{finalPrice}</p>
                <TrashIcon className="w-6 h-6 cursor-pointer" />

            </OrderProductFinalSection>
            
        </div>
        
    )
}