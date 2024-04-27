import { useEffect, useState } from "react";
import productApi from "../../../../services/buyer.services";
import { DeliveryOptionsType } from "../../../../types/user.types";
const ASSET_API = import.meta.env.VITE_ASSETS_URL

interface propsType{
    deliveryOptions: DeliveryOptionsType[],
    selectedOption: number,
    setSelectedOption: (deliveryId: number) => void
}


export default function DeliveryOptionList(props: propsType){

    // DISPATCH REDUX

    const handleRadioChange = (e) => {
        props.setSelectedOption(Number(e.target.value))
    };
    
    // HANDLE DELIVERY CHANGE
    

    // if()
    return(
        <div className="bg-sky-100 p-5 rounded-md flex flex-col gap-3 w-3/5 justify-center">
    {props.deliveryOptions?.map(item => (
        <div key={item.id} className="flex gap-4 items-center ">
            <input
                type="radio"
                id={`delivery-option-${item.id}`}
                name="delivery-option"
                value={item.id}
                checked={props.selectedOption === item.id}
                onChange={handleRadioChange}
                className="rounded-full h-5 w-5"
            />
            <label htmlFor={`delivery-option-${item.id}`} className="flex items-center">
                {item.icon ? (
                    <img src={`${ASSET_API}${item.icon.url}`} alt="" className="object-cover mr-3 rounded-full w-10" />
                ) : null}
                <span>{item.name}</span>
                <div className="text-green-500 p-1 bg-slate-100 rounded-sm ml-3">
                    {item.base_price.toLocaleString('de-DE')} ₫
                </div>
            </label>
        </div>
    ))}
</div>

    )
}