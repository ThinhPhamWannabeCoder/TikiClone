import PriceRange from "./PriceRange";
//import Rates from "./Rates";
import SecondaryTitle from "../../components/Title/SecondaryTitle";
import Shipping from "./Shipping";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useEffect, useState } from "react";
import { PriceRangeOption, PriceRangeType } from "../../types/home.types";
import { DeliveryOptionsType } from "../../types/user.types";
import productApi from "../../services/buyer.services";


export default function NavFilter(){
    // ALL STATES
    //Shipping States
    const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOptionsType[]>([])

    const [ selectedDeliveryOption,setSelectedDeliveryOption ] = useState<number[]>([]);
    // Price Range States
    const [priceRange, setPriceRange] = useState<PriceRangeType>({first_quatile: 0, third_quatile: 0});
    // Price Options States
    const [priceOptions, setPriceOptions] = useState<PriceRangeOption>({from: -1, to: -1});

    useEffect(()=>{
        console.log(priceOptions)
        console.log(selectedDeliveryOption)
        console.log(priceRange)

    },[priceRange, selectedDeliveryOption, priceOptions])
    useEffect(()=>{
        productApi.getDeliveries()
        .then(res =>{
            setDeliveryOptions(res.data)
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    },[])
    return(
        <>
            <SecondaryTitle name="Lọc"/>
            <Shipping
                data={deliveryOptions}
                selectedDeliveryOption={selectedDeliveryOption}
                setSelectedDeliveryOption={setSelectedDeliveryOption}
            />
            <PriceRange
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                priceOptions={priceOptions}
                setPriceOptions={setPriceOptions}
            />
            <PrimaryButton
                name="Lọc"
                fnc={()=>{console.log("xin chao ")}}
                class="my-2"
            />
        </>
    )
}