import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";
import { PlusIcon, MinusIcon} from "@heroicons/react/24/solid";
// interface OrderOptionProps{
//     option: string,
//     optionUrl: string,
//     optionPrice: number,
//     productNumber: number,
//     productNumberHandler: number,
// }
const data = {
    productPrice: 198.000
}
export default function OrderOption(){
    const [orderNumber, setOrderNumber] = useState<number>(1);
    const [finalPrice, setFinalPrice] = useState<string>(data.productPrice.toFixed(3))
    useEffect(()=>{
        setFinalPrice((data.productPrice*orderNumber).toFixed(3))
    },[orderNumber])
    return(
        <>
            {/* Phai render ra chu khong de khong the nay */}
            {/* <div>
                Product Option
            </div> */}
            <div className="py-3">
                <h3 className="font-semibold text-lg py-4">Số lượng</h3>
                <div className="flex items-center gap-1">
                    <button className={`border-2  p-1 rounded-lg 
                                        ${orderNumber===1 ? 'bg-slate-200':' border-slate-400'}
                                    `}
                            onClick={()=>{setOrderNumber(orderNumber-1)}}
                            disabled={orderNumber===1}
                            
                    >
                        <MinusIcon className="w-6"/>

                    </button>
                    <p className="border-2 p-1 rounded-lg w-10 flex justify-center items-center border-slate-400">
                        {orderNumber}
                    </p>
                    <button className="border-2 p-1 rounded-lg border-slate-400"
                            onClick={()=>{setOrderNumber(orderNumber+1)}}
                    >
                        <PlusIcon className="w-6"/>

                    </button>
                </div>
                
            </div>
            <div>
                <h3 className="font-semibold text-lg">Tạm tính</h3>
                <p className="text-xl font-bold py-4">{finalPrice}</p>
            </div>

        </>
    )
}