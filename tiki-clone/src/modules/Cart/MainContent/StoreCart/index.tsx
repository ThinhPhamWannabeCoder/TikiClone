import OrderLayout from "../../../../components/Order/OrderLayout";
import { producPageData } from "../../../../components/Product/sampleData";
import CartCard from "./CartCard";

export default function StoreCart(data: cartByStore){
    
    return(
        <OrderLayout>
            <>
                <div className="flex gap-1 col-span-9 ">
                    <input type="checkbox" name="" id="" className="cursor-pointer" />
                    <p className="font-semibold" >
                        {data.name}
                    </p>
                </div>
                <div className="flex flex-col col-span-9">

                    {/* Handle quantity Change and selected, delete */}
                    {
                        data.product.map(item => {
                            return (
                                <CartCard 
                                    id={item.id}
                                    name= {item.name}
                                    quantity= {item.quantity}
                                    price={item.price}
                                
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

