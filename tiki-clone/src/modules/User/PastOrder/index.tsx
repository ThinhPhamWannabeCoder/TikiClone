import { useEffect, useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import productApi from "../../../services/buyer.services";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { PastOrderHeader, PastOrderItemType } from "../../../types/user.types";



export default function PastOrders(){
    const user = useSelector((state:RootState)=>state.auth.user)
    const [selectedItem, setSelectedItem] = useState<number>(0)
    const [orderItems, setOrderItems] = useState<PastOrderItemType[]>([])
    // const handle
    const [header, setHeader] = useState<PastOrderHeader[]>()
    useEffect(()=>{
        productApi.getPastOrderHeader()
            .then(res =>{
                setHeader([{id: 0, name:"Tất cả"}, ...res.data])
            })
            .catch(err => {
                console.log(err.message)
            })
    },[])
    useEffect(()=>{
        // console.log(selectedItem)
        if(selectedItem || selectedItem==0){
            if(selectedItem==0){
                productApi.getAlPastOrderItems({userId: user?.id as number})
                    .then(res=>{
                        // let holder: PastOrderItemType[] = 
                       setOrderItems(res.data.data)
                    })
                    .catch(err =>{
                        console.log(err.message)
                    })
            }
            else{
                // console.log("filter")
                productApi.getAlPastOrderItemsByStatus({userId: user?.id as number, status: selectedItem as number})
                    .then(res=>{
                        setOrderItems(res.data.data)
                    })
                    .catch(err =>{
                        console.log(err.message)
                    })
            }
        }
        
    },[selectedItem])
    return(
        <div className="flex flex-col gap-3">
            <Header header={header as PastOrderHeader[]} selectedItem={selectedItem as number} setSelectedItem={setSelectedItem}/>
            <MainContent orderItem={orderItems as PastOrderItemType[]}/>

        </div>
       
    )
}
