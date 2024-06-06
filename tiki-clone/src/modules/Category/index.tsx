import { useEffect, useState } from "react";
import { DeliveryOptionsType } from "../../types/user.types";
import CategoryNav from "./CategoryNav";
import CategoryContent from "./MainContent";

export default function Category(){

    const [prices, setPrices] = useState<string>('0-3');
    const [refresh, setRefresh] = useState<boolean>(false);


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