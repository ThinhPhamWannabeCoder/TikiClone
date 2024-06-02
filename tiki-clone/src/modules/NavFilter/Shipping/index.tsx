import { useEffect, useState } from "react"
import productApi from "../../../services/buyer.services"
import { DeliveryOptionsType } from "../../../types/user.types"
import SecondaryTitle from "../../../components/Title/SecondaryTitle"
const ASSET_API = import.meta.env.VITE_ASSETS_URL

interface PropsType{
    data: DeliveryOptionsType[],
    selectedDeliveryOption: number[],
    setSelectedDeliveryOption: (input: number[])=>void

}
export default function Shipping(props: PropsType){
    const handleShipping = (input: number) =>{
        
      
        props.setSelectedDeliveryOption((prevOptions:number[])=>{
            if(prevOptions.includes(input)){
                return prevOptions.filter(option => option != input);
            }
            else{
                return [...prevOptions , input]
            }
        })
    }
    return (
        <>
            <h1 className="font-semibold">Giao hàng</h1>
            <div className="flex flex-col gap-3">
                {
                    props.data?.map(item=>{
                        return(
                            <div className=" flex gap-2" key={item.id}
                                onClick={()=>{handleShipping(item.id)}}
                            >
                                <input type="checkbox" id={"shipping_"+item.id.toString()}  />
                                <label htmlFor={"shipping_"+item.id.toString()}  className="flex gap-2" >
                                    {item.name}
                                    {
                                        item.icon ? 
                                            (<img src={`${ASSET_API}${item.icon.url}`} alt="" className="object-cover mr-3 w-12" />
                                        ) : null
                                    }

                                </label>
                                
                            </div>
                        )
                    })
                }
            

            </div>
        </>
        
    )
}