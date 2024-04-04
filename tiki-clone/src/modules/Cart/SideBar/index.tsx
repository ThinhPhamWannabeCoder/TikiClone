
import { useEffect } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";

export default function SideBar(){
    useEffect(()=>{
        // Fetch delivery
    },[])
    return(
        <div className="flex flex-col gap-3 w-1/5">
            <DeliveryTo/>
            <SumPrice/>
            <PrimaryButton name="Mua hàng"/>
        </div>
    )
}