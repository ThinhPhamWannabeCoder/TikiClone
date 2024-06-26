import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import OrderProductFirstSection from "../../../../components/Order/OrderDetail/OrderProductFirstSection";
import OrderProductPrice from "../../../../components/Order/OrderDetail/OrderProductPrice";
import OrderProductQuantity from "../../../../components/Order/OrderDetail/OrderProductQuantity";
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection";
import { useEffect, useState } from "react";
import productApi from "../../../../services/buyer.services";
import { useDispatch, useSelector } from "react-redux";
import { update, selectCart, deleteCart } from "../../../../redux/cart/cartSlice";
const ASSET_API = import.meta.env.VITE_ASSETS_URL

import { RootState } from "../../../../redux/store";
import { formatCurrency } from "../../../../utils/common";
interface productCart{
    id: number,
    name: string,
    quantity: number,
    price: number,
    image: string
}
export default function CartCard(prop: productCart){
    // const 
    const dispatch = useDispatch();
    const selectedCarts = useSelector((state: RootState) => state.cart.selectedCarts)
    const [finalPrice, setFinalPrice] = useState<number>(prop.price*prop.quantity)
    useEffect(()=>{
        setFinalPrice(prop.price*prop.quantity)
    },[prop.quantity])

    const handleQuantity = (data:{cartId: number, quantity: number})=>{
        productApi.updateCartByCartId({cartId: data.cartId, quantity: data.quantity})
        .then(res=>{
            if(res.data.status === 200){
                dispatch(update({cardId: data.cartId, quantity: data.quantity}))

            }
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    const handleDeleteCart = (cartId: number)=>{

        productApi.deleteByIds({ids: [cartId]})
            .then(res=>{
                if(res.data.status === 200){
                    console.log("good bro")
                    dispatch(deleteCart(cartId))
                }
            })
            .catch(err =>{
                console.log(err.message)
            })
        // DELETE
    }
    return (
        <div className="py-4 grid grid-cols-9 items-center text-lg">

            <OrderProductFirstSection class="flex gap-1 items-center">
                <input 
                    type="checkbox" 
                    checked={(selectedCarts.includes(prop.id))?true:false} 
                    // onChange={()=>prop.handleSelectedCart(prop.id)}
                    onChange={()=>dispatch(selectCart(prop.id))}
                    className="cursor-pointer" />
                <img src={`${ASSET_API}${prop.image}`} alt=""  className="w-14 h-14 object-cover rounded-md mr-3" />
                <p>{prop.name}</p>
            </OrderProductFirstSection>
            <OrderProductPrice>
                <p>{formatCurrency(prop.price)} đ</p>
            </OrderProductPrice>

            <OrderProductQuantity>
                <div className="flex items-center gap-1">
                    <button className={`border-2  p-1 rounded-lg 
                                        ${prop.quantity===1 ? 'bg-slate-200':' border-slate-400'}
                                    `}
                            // onClick={()=>{setProductQuantity(productQuantity-1)}}
                            onClick={()=>handleQuantity({cartId: prop.id, quantity: prop.quantity-1})}
                            disabled={prop.quantity===1}
                            
                    >
                        <MinusIcon className="w-6"/>

                    </button>
                    <p className="border-2 p-1 rounded-lg w-10 flex justify-center items-center border-slate-400">
                        {prop.quantity}
                    </p>

                    
                    
                    <button className="border-2 p-1 rounded-lg border-slate-400"
                            // onClick={()=>{setProductQuantity(productQuantity+1)}}
                            onClick={()=>handleQuantity({cartId: prop.id, quantity: prop.quantity+1})}

                    >
                        <PlusIcon className="w-6"/>

                    </button>
                </div>
            </OrderProductQuantity>
            <OrderProductFinalSection class="flex justify-between items-center">
                <p> {formatCurrency(finalPrice)} đ</p>
                <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>{handleDeleteCart(prop.id)}}/>

            </OrderProductFinalSection>
            
        </div>
        
    )
}