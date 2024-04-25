import { TrashIcon } from "@heroicons/react/24/outline";
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection";
import OrderLayout from "../../../../components/Order/OrderLayout";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { deleteCartByStore, selectStore } from "../../../../redux/cart/cartSlice";
import productApi from "../../../../services/buyer.services";

interface propsType{
    storeId: number,
    storeName: string,
    data: object[]
}
export default function StoreCart(prop: propsType){
    const carts = useSelector((state:RootState) => state.cart)
    const dispatch = useDispatch()
    const handleDeleteStore = (storeId: number)=>{

        const cartIds = carts.raw.reduce((acc, item)=>{
            if(item.store.id == storeId) acc.push(item.id)
            return acc
        },[])
        productApi.deleteByIds({ids: [...cartIds]})
        .then(res=>{
            if(res.data.status === 200){
                console.log("good bro")
                dispatch(deleteCartByStore(storeId))
            }
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    return(
        <OrderLayout>
            <>
                <div className="flex justify-between col-span-9 ">
                    <div className="flex gap-1">
                        <input 
                            type="checkbox"  
                            className="cursor-pointer"
                            // checked={(prop.selectedStores.includes(prop.storeId))?true:false} 
                            checked={(carts.selectedStores.includes(prop.storeId))?true:false} 
                            // onChange={()=>prop.handleSelectedStore(prop.storeId)}
                            onChange={()=>dispatch(selectStore(prop.storeId))}
                        />
                        <p className="font-semibold" >
                            {prop.storeName}
                        </p>
                    </div>
                    
                    <OrderProductFinalSection class="flex justify-between items-center">
                       
                        {/* <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>{prop.handleDeleteStore(prop.storeId)}} /> */}
                        <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>{handleDeleteStore(prop.storeId)}} />

                    </OrderProductFinalSection>
                </div>
                <div className="flex flex-col col-span-9">

                    {
                        prop.data.map(item => {
                            return (
                                <CartCard 
                                    key={item.id}
                                    id={item.id}
                                    name= {item.product.name}
                                    quantity= {item.quantity}
                                    price={item.product.price}
                                />
                            )
                        })
                    }
                </div>
            </>
        </OrderLayout>
    )
}

