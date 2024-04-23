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
interface propsType{
    data: UserAddress,
    setAddress: (data: UserAddress) => void;
}

export default function DeliveryTo(prop: propsType){
    // GET USER INFOMATION
    // Get Delivery Location
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    // User Id from Redux
    const onCloseModal = ()=>{
        // console.log(addressId)
        setIsOpen(!isOpen);
    }
    const changeDeliveryAddress = (address: UserAddress)=>{
        prop.setAddress(address)
        // console.log(address)
        setIsOpen(!isOpen);
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
                <p className="border-r-2  pr-2">{prop.data.contact_name}</p>
                {/* Redux */}
                <p className="pl-2">{prop.data.contact_mobile}</p>
            </div>
            <div>
                {/* Type */}
                 
                <span className="text-green-400 p-1 bg-green-100 rounded-sm" >{prop.data.type}</span>
                <span className="mx-1">{prop.data.address}</span>

            </div>
        </ContentBox>
    )
}