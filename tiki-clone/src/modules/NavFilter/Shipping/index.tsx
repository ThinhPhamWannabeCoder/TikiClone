import { useEffect, useState } from "react"
import productApi from "../../../services/buyer.services"
import { DeliveryOptionsType } from "../../../types/user.types"
import SecondaryTitle from "../../../components/Title/SecondaryTitle"
const ASSET_API = import.meta.env.VITE_ASSETS_URL

export default function Shipping(){
    const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOptionsType[]>()

    useEffect(()=>{
        productApi.getDeliveries()
        .then(res =>{
            setDeliveryOptions(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    },[])
    return (
        <>
            <SecondaryTitle name="Giao hàng"/>
            <div className="flex flex-col gap-3">
                {
                    deliveryOptions?.map(item=>{
                        return(
                            <div className=" flex gap-2" key={item.id}>
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