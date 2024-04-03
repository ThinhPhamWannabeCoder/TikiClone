import { useEffect, useRef, useState } from "react";
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
export default function OrderOption(prop: {price: number}){
    const [orderNumber, setOrderNumber] = useState<number>(1);
    const [finalPrice, setFinalPrice] = useState<string>(prop.price.toFixed(3))
    useEffect(()=>{
        setFinalPrice((prop.price*orderNumber).toFixed(3))
    },[orderNumber])
    const regex = /^[0-9]$/
    // const inputHanlder= (event)=>{

        // setOrderNumber(parseInt(e.target.value))
        // const inputValue = event.target.value;
        // setOrderNumber(inputValue);

        // if (inputValue.trim() === '') {
        //     // If input is empty, set focus
        //     event.target.focus();
        // } else {
        //     // If input is not empty, set to 1
        //     setOrderNumber(1);
        // }
    // }
    // useEffect(()=>{console.log(inputRef.current)},[inputRef])

    return(
        <>
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
                    {/* <input className="border-2 p-1 rounded-lg w-10 flex justify-center items-center border-slate-400"
                            value={orderNumber}
                            onChange={inputHanlder}
                            id='order_number'
                    /> */}
                        
                    
                    
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