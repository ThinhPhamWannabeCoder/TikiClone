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

const data:cartByStore[]=[
    {
        store_id: 1,
        name: "Apple",
        product:[
            {
            id:1,
            name: "iphone",
            quantity: 200,
            price: 340.000,
            },
            {
                id:2,
                name: "ipad",
                quantity: 300,
                price: 340.000,
            },
        ]
    },
    {
        store_id: 2,
        name: "Samsung",
        product:[
            {
                id:3,
                name: "Samsung A52",
                quantity: 150,
                price: 340.000,
            },
            {
                id:4,
                name: "Samsung A40",
                quantity: 180,
                price: 340.000,
            },
        ]
    }
]