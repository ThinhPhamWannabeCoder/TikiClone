import OrderLayout from "../../../../components/Order/OrderLayout";
import { producPageData } from "../../../../components/Product/sampleData";
import CartCard from "./CartCard";

interface propsType{
    storeId: number,
    storeName: string,
    handleSelectedCart: (cartdId: number) => void,
    handleSelectedStore: (storeId:number)=> void,
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
                <div className="flex gap-1 col-span-9 ">
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

