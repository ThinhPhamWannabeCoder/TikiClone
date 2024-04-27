import { useSelector } from "react-redux";
import { CartType } from "../../../../../types/user.types"
import OrderProduct from "./OrderProduct"

import { CalendarIcon } from "@heroicons/react/24/solid";
import { RootState } from "../../../../../redux/store";

interface propTypes{
    delivery: {
        name: string,
        duration: string,
        base_price: number,
        short_description: string,
        description: string
    }
    
}
export default function ProductOrderList(props: propTypes ){
    // REDUX ORDER DISPATCH
    // REDUX ORDER USE SELECTOR
    const data = Array.from({length: 5},(_,index)=> index+1)
    const orders = useSelector((state:RootState) => state.order)

    return(
        <div className="border rounded-md flex flex-col  mt-10 relative">
            {/* Delivery Duration */}
            {/* Delivery option name x price */}
            
            {/* THIS WILL BE JSX ELEMENENT */}
           <div className="text-green-700 absolute -top-4 bg-white px-2 left-10 flex gap-3 items-center text-lg">
                <CalendarIcon className="w-7 h-7"/>
                {props.delivery.short_description}, trong vòng {props.delivery.duration}
            </div>
            <div className="flex  gap-3 mx-3 my-5">
                <div className="flex flex-col  w-3/5 ">
                    <div className="flex justify-between w-full">
                        <div>{props.delivery.name.toUpperCase()}</div>
                        <div className="text-green-500 p-1 bg-green-100 rounded-md">{props.delivery.base_price.toLocaleString('de-DE')} ₫</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        {
                            orders.carts.map(item=>{
                                return <OrderProduct product={item.product} quantity={item.quantity}/>
                            })
                        }
                    </div >
                </div>
                
                <div className="w-2/5 ">
                    <div className="w-full  bg-slate-200  rounded-md text-lg px-5 py-2">
                        {props.delivery.description}
                    </div>
                </div>
            </div>
            
           
        </div>
    )
}
const sampleData: CartType[]= []