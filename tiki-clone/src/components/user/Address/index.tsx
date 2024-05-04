import { useEffect, useState } from "react";
import { GetAddressList } from "../../../types/user.types";
import ContentBox from "../../Common/ContentBox";
import UserAddressItem from "./UserAddressItem";
import productApi from "../../../services/buyer.services";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import UserAddressUpdate from "./Update";

export default function UserAddressModule(){
    const user = useSelector((state: RootState)=>state.auth.user)
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)
    const handleUpdate = () => {
        // console.log(id)
        setIsUpdateOpen(!isUpdateOpen)
        
    }
    const [addressList, setAddressList] = useState<GetAddressList[]>([])
    useEffect(()=>{
        productApi.getAddress( {userId: user?.id as number, default: false})
            .then(res=>{  
                setAddressList(res.data.data)
            })

            .catch(err =>{
                console.log(err.message)
            })
    },[])
    if(isUpdateOpen){
        return(
            <UserAddressUpdate 
                onClose={handleUpdate}
            />
        )
    }
    else{
        return(
            <div className="flex flex-col gap-3 ">
                <div onClick={handleUpdate}>
                    <ContentBox class="p-5 text-center rounded-none hover:bg-slate-400 cursor-pointer hover:text-white" >
                        THÊM ĐỊA CHỈ
                    </ContentBox>
                </div>
                

                {addressList?.map(item => (<UserAddressItem data={item} key={item.id}/>))}
            </div>
        )
    }
}