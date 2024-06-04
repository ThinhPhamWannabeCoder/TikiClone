import { useEffect, useState } from "react";
import { DeliveryOptionsType } from "../../types/user.types";
import CategoryNav from "./CategoryNav";
import CategoryContent from "./MainContent";
import { PriceRangeOption, PriceRangeType } from "../../types/home.types";

export default function Category(){
    // STATES HERE TO CHANGE OK BRO
        // ALL STATES
    //Shipping States
    const [prices, setPrices] = useState<string>('0-3');
    const [refresh, setRefresh] = useState<boolean>(false);

   useEffect(()=>{
        console.log("refresh index ne")
        console.log(refresh)
   },[refresh])
    // 
    return (
        <>
            <CategoryNav
                setPrices={setPrices}
                setRefresh={setRefresh}
            />
            <CategoryContent
                refresh={refresh}
                setRefresh={setRefresh}
                price={prices}
            />
        </>
    )
}