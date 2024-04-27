import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";
import DeliveryUpdateModal from "../Modal/DeliveryUpdateModal";
import productApi from "../../../services/buyer.services";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface UserAddress{
    id: number,
    type: string,
    address: string,
    contact_name: string,
    contact_mobile: string,
    default: string
}

export default function DeliveryTo(){
    // GET USER INFOMATION
    // Get Delivery Location
    const user = useSelector((state: RootState)=>state.auth.user)
    
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState<UserAddress>()

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    // User Id from Redux
    const onCloseModal = ()=>{
        // console.log(addressId)
        setIsOpen(!isOpen);
    }
    const changeDeliveryAddress = (address: UserAddress)=>{
        setAddress(address)
        // console.log(address)
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        productApi.getAddress( {userId: user?.id as number, default: true})
            .then(res=>{  
                setAddress(res.data[0])
            })

            .catch(err =>{
                console.log(err.message)
            })
    },[])
    if(address === undefined ){
        return "waiting" 
    }
    return(
        <ContentBox>
            <div className="flex justify-between items-center">
                <h2>Giao tới</h2>
                <p className="text-blue-500 cursor-pointer" onClick={toggleModal}>Thay đổi</p>
                <DeliveryUpdateModal isOpen={isOpen} onClose={onCloseModal} setAddress={changeDeliveryAddress} />
            </div>
            <div className="font-semibold flex ">
                {/* Redux*/}
                <p className="border-r-2  pr-2">{address?.contact_name}</p>
                {/* Redux */}
                <p className="pl-2">{address?.contact_mobile}</p>
            </div>
            <div>
                {/* Type */}
                 
                <span className="text-green-400 p-1 bg-green-100 rounded-sm" >{address?.type}</span>
                <span className="mx-1">{address?.address}</span>

            </div>
        </ContentBox>
    )
}