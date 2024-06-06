import ContentBox from "../../../components/Common/ContentBox"
import { useEffect, useState } from "react"
import productApi from "../../../services/buyer.services"
interface banner{
    id: number,
    name: string,
    image: string
}
export default function HeroSection(){
    const [banner, setBanner] = useState<banner[]|undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)
    useEffect(()=>{
        productApi.getPromotionBanner()
            .then(res => {
                // console.log(res.data)
                if(res.data.length>0){
                    setBanner(res.data)
                    setLoading(false)
                }
                else{
                    console.log('There are no banner')
                }
            })
            .catch(err => console.log(err.message))
    },[])
    if(isLoading){
        return(
            <ContentBox class="w-full">
            
                Hero Secion 
            </ContentBox>
        )
    }
    return(
        
        <ContentBox class="w-full ">
            <div className="w-full flex gap-4">

                {banner?.map(item=>{
                    return(
                        <img key={item.id} src={`http://localhost:1337${item.image}`} alt="" className="flex-1 object-cover h-80 rounded-xl"/>
                    )
                })}
            </div>
           <div className="flex justify-center">
             this is pagination 
           </div>
        </ContentBox>
            
        // image swipping
        // flex -
    )
}