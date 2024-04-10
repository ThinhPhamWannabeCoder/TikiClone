import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
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
    handleSelectedCart: (cartdId: number) => void,
    handleDeleteCart: (cartId: number) => void,
    selectedCarts: number[],


    
}
export default function CartCard(prop: productCart){
    const [finalPrice, setFinalPrice] = useState<number>(prop.price*prop.quantity)
    const [productQuantity, setProductQuantity] = useState<number>(prop.quantity);
    useEffect(()=>{
        setFinalPrice(prop.price*productQuantity)
        // SetNewQuantity
        // productApi.updateCartQuantityByProductBy({cartId, quantity})
    },[productQuantity])
    
    return (
        <div className="py-4 grid grid-cols-9 items-center">

            <OrderProductFirstSection class="flex gap-1">
                <input 
                    type="checkbox" 
                    checked={(prop.selectedCarts.includes(prop.id))?true:false} 
                    onChange={()=>prop.handleSelectedCart(prop.id)}
                    className="cursor-pointer" />
                <p>{prop.name}</p>
            </OrderProductFirstSection>
            <OrderProductPrice>
                <p>{prop.price}</p>
            </OrderProductPrice>

            <OrderProductQuantity>
                <div className="flex items-center gap-1">
                    <button className={`border-2  p-1 rounded-lg 
                                        ${productQuantity===1 ? 'bg-slate-200':' border-slate-400'}
                                    `}
                            onClick={()=>{setProductQuantity(productQuantity-1)}}
                            disabled={productQuantity===1}
                            
                    >
                        <MinusIcon className="w-6"/>

                    </button>
                    <p className="border-2 p-1 rounded-lg w-10 flex justify-center items-center border-slate-400">
                        {productQuantity}
                    </p>

                    
                    
                    <button className="border-2 p-1 rounded-lg border-slate-400"
                            onClick={()=>{setProductQuantity(productQuantity+1)}}
                    >
                        <PlusIcon className="w-6"/>

                    </button>
                </div>
            </OrderProductQuantity>
            <OrderProductFinalSection class="flex justify-between items-center">
                <p>{finalPrice}</p>
                <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>{prop.handleDeleteCart(prop.id)}}/>

            </OrderProductFinalSection>
            
        </div>
        
    )
}