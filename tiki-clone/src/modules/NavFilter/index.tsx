import PriceRange from "./PriceRange";
//import Rates from "./Rates";
import SecondaryTitle from "../../components/Title/SecondaryTitle";
import Shipping from "./Shipping";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useEffect, useState } from "react";
import { PriceRangeOption, PriceRangeType } from "../../types/home.types";
import { DeliveryOptionsType } from "../../types/user.types";
import productApi from "../../services/buyer.services";

interface propsType{
    setPrices: (input:string)=>void,
    setRefresh: (input: boolean) => void
}
export default function NavFilter(props: propsType){
    // ALL STATES
    //Shipping States
    const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOptionsType[]>([])

    const [ selectedDeliveryOption,setSelectedDeliveryOption ] = useState<number[]>([]);
    // Price Range States
    const [priceRange, setPriceRange] = useState<number[]>([0,0]);
    // Price Options States
    const [priceOptions, setPriceOptions] = useState<PriceRangeOption>({from: -1, to: -1});

  
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
    
    const handleDeleteInputs = () =>{
        setPriceRange([0,0]);
        setPriceOptions({from: -1, to: -1});
        setSelectedDeliveryOption([]);
        console.log(selectedDeliveryOption);
    }
    const handlePriceOption = () => {
        if(priceRange[0] <= priceRange[1]){
            props.setRefresh(true)
            return;
        }
        alert("Giá từ phải nhỏ hơn giá tới")
        setPriceOptions({from: -1, to: -1})
        setPriceRange([0,0])
    }
    return(
        <div className="flex flex-col px-3 gap-3">
            <h1 className="font-semibold border-b border-slate-300 py-2">Lọc</h1>
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
                handleDeleteInputs={handleDeleteInputs}
            />
            <PrimaryButton
                name="Lọc"
                fnc={handlePriceOption}
                class="my-2"
            />
        </div>
    )
}