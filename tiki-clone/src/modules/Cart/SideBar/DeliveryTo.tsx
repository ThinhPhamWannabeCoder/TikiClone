import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";
import DeliveryUpdateModal from "../Modal/DeliveryUpdateModal";
import productApi from "../../../services/buyer.services";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface UserAddresses{
    id: number,
    type: string,
    address: string,
    contact_name: string,
    contact_mobile: string,
    default: string
}
interface propsType{
    data: UserAddresses[],
    activeAddress: number
    setActive: (addressId: number)=>void
}

export default function DeliveryTo(prop: propsType){
    // GET USER INFOMATION
    // Get Delivery Location
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    // User Id from Redux
    const onCloseModal = (addressId: number)=>{
        console.log(addressId)
        setIsOpen(!isOpen);
    }
    
    return(
        <ContentBox>
            <div className="flex justify-between items-center">
                <h2>Giao tới</h2>
                <p className="text-blue-500 cursor-pointer" onClick={toggleModal}>Thay đổi</p>
                <DeliveryUpdateModal isOpen={isOpen} onClose={onCloseModal} />
            </div>
            <div className="font-semibold flex ">
                {/* Redux*/}
                <p className="border-r-2  pr-2">{prop.data.contactName}</p>
                {/* Redux */}
                <p className="pl-2">{prop.data.contactPhone}</p>
            </div>
            <div>
                {/* Type */}
                 
                <span className="text-green-400 p-1 bg-green-100 rounded-sm" rel={prop.data.type.id}>{prop.data.type.name}</span>
                <span className="mx-1">{prop.data.location}</span>

            </div>
        </ContentBox>
    )
}