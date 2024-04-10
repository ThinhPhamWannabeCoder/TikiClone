import { TrashIcon } from "@heroicons/react/24/outline";
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection";
import OrderLayout from "../../../../components/Order/OrderLayout";
import { producPageData } from "../../../../components/Product/sampleData";
import CartCard from "./CartCard";

interface propsType{
    storeId: number,
    storeName: string,
    handleSelectedCart: (cartdId: number) => void,
    handleSelectedStore: (storeId:number)=> void,
    handleDeleteStore: (storeId: number) => void,
    handleDeleteCart: (cartId: number) => void,
    selectedCarts: number[],
    selectedStores: number[],
    
    data: object[]
    // data
}
// data: cartByStore
export default function StoreCart(prop: propsType){
    return(
        <OrderLayout>
            <>
                <div className="flex justify-between col-span-9 ">
                    <div className="flex gap-1">
                        <input 
                            type="checkbox"  
                            className="cursor-pointer"
                            checked={(prop.selectedStores.includes(prop.storeId))?true:false} 
                            onChange={()=>prop.handleSelectedStore(prop.storeId)}
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
                                    selectedCarts={prop.selectedCarts}
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

