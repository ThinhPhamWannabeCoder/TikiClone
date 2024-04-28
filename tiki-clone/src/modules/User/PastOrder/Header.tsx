import { useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";

export default function Header(){
    const [selectedItem, setSelectedItem] = useState<number>()
    // const handle
    return(
        <div className={`bg-white rounded-lg grid grid-cols-${orderStatuses.length}`}>

            {orderStatuses.map((item,index)=>(
                <div 
                    key={index}
                    className={`text-nowrap text-center cursor-pointer p-5
                        ${selectedItem == index ? 'text-blue-500 border-b-2 border-blue-500' : " text-slate-500"}
                    `}
                    onClick={()=> setSelectedItem(index)}
                >
                    <span>{item}</span>
                </div>
            ))}
        </div>
    )
}
const orderStatuses = [
    "Tất cả",
    "Đã đặt hàng",
    "Đang xử lý",
    "Đang vận chuyển",
    "Đã giao",
    "Đã huỷ"
  ];
  