import { TrashIcon } from "@heroicons/react/24/outline";
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection";
import OrderLayout from "../../../../components/Order/OrderLayout";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { selectStore } from "../../../../redux/cart/cartSlice";

interface propsType{
    storeId: number,
    storeName: string,
    handleDeleteStore: (storeId: number) => void,
    handleDeleteCart: (cartId: number) => void,
    data: object[]
    // data
}
// data: cartByStore
export default function StoreCart(prop: propsType){
    const selectedStoreds = useSelector((state:RootState) => state.cart.selectedStores)
    const dispatch = useDispatch()
    return(
        <OrderLayout>
            <>
                <div className="flex justify-between col-span-9 ">
                    <div className="flex gap-1">
                        <input 
                            type="checkbox"  
                            className="cursor-pointer"
                            // checked={(prop.selectedStores.includes(prop.storeId))?true:false} 
                            checked={(selectedStoreds.includes(prop.storeId))?true:false} 
                            // onChange={()=>prop.handleSelectedStore(prop.storeId)}
                            onChange={()=>dispatch(selectStore(prop.storeId))}
                        />
                        <p className="font-semibold" >
                            {prop.storeName}
                        </p>
                    </div>
                    
                    <OrderProductFinalSection class="flex justify-between items-center">
                       
                        <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>{prop.handleDeleteStore(prop.storeId)}} />

                    </OrderProductFinalSection>
                </div>
                <div className="flex flex-col col-span-9">

                    {/* Handle quantity Change and selected, delete */}
                    {
                        prop.data.map(item => {
                            return (
                                <CartCard 
                                    key={item.id}
                                    id={item.id}
                                    name= {item.product.name}
                                    quantity= {item.quantity}
                                    price={item.product.price}
                                    handleSelectedCart={prop.handleSelectedCart}
                                    handleDeleteCart={prop.handleDeleteCart}

                                />
                            )
                        })
                    }
                </div>
            </>
        </OrderLayout>
    )
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

