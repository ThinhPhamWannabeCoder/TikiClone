
import { useEffect } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";

export default function SideBar(){
    useEffect(()=>{
        // Fetch delivery

        // Khi quantity thay doi -> tinh toan lai chi phi
    },[])
    // neu danh sach bang khong thi sumprice khong hanlde duoc
    return(
        <div className="flex flex-col gap-3 w-1/5">
            <DeliveryTo/>
            <SumPrice/>
            <PrimaryButton name="Mua hàng"/>
        </div>
    )
}