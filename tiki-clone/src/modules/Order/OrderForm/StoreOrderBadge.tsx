import ContentBox from "../../../components/Common/ContentBox";
import { thinh_avatar } from "../../../assets/images/image";
import { useEffect, useState } from "react";
import productApi from "../../../services/buyer.services";
const data={
    avatar: thinh_avatar,
    transactionNumber: 500
}
interface storeType{
    avatar: string,
    orderNumber: number,
}
export default function StoreOrderBadge(prop: {storeId : number}){
    const [storeAvatar, setStoreAvatar] = useState<string|undefined>(undefined)
    const [storeName, setStoreName] = useState<string|undefined>(undefined)
    const [shortIntro, setShortIntro] = useState<string>("");
    useEffect(()=>{
         productApi.getStoreShortById(prop.storeId)
            .then(x => {
                 setStoreAvatar(`http://localhost:1337${x.data.avatar}`);
                 setShortIntro(x.data.shortIntro);
                 setStoreName(x.data.name);
             })
            .catch()
    },[])
    return(
            <div className="border-slate-200 border-b-2 flex gap-3 pb-5">
                <img src={storeAvatar} className="aspect-square rounded-full object-cover h-16" alt="" />

                <div className="flex flex-col justify-between">

                    <h1 className="font-semibold text-lg">{storeName}</h1>

                    <p className="text-slate-500">{shortIntro}</p>
                </div>
            </div>

    )
}