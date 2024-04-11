
import { useEffect, useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";
import { useNavigate } from "react-router-dom";
import OrderModal from "../Modal/OrderModal";

interface propsType{
    data: object[],
    selectedCarts: number[],
}

export default function SideBar(prop: propsType){
    const [sumPrice, setSumPrice] = useState<number>(0)
    const [activeDeliveryId, setActiveDeliveryId] = useState<number>(2);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    // User Id from Redux
    // const onCloseModal = (addressId: number)=>{
    //     console.log(addressId)
    //     setIsOpen(!isOpen);
    // }
//  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
// Delievery to will have to delievy contact and sumprice will have the delivery price added to calculate at their
    const navigate = useNavigate();
    const OrderHandler = ()=>{
        // console.log(prop.data.filter(item=>prop.selectedCarts.includes(item.id)))
        // SET REDUX
        const orderData = prop.data.filter(item=>prop.selectedCarts.includes(item.id)).map(item=> {
            return {
                id: item.id,
                productId: item.product.id,
                quantity: item.quantity,
                // userId: redux - if needed
            }
        })
        // addressId
        // Gia tien da tinh: Delivery va product + sum -> dua vao order cho nhanh
        // 
        console.log(orderData)
        toggleModal()
        // navigate("/user")
    }
    useEffect(()=>{
        let sum = 0;

        prop.data.filter(item=>prop.selectedCarts.includes(item.id)).forEach(item=>{
            sum+= item.quantity * item.product.price
        })

        setSumPrice(sum)

    },[prop.selectedCarts])
    

    return(
        <div className="flex flex-col gap-3 w-1/5">
            <DeliveryTo data={sampleData}/>
            {/* [{ProductPrice & Produce Quantity}] */}
            <SumPrice
                sumPrice={sumPrice}
            />
            {/* List activate product -> to set order Package */}
            <PrimaryButton 
                name="Mua hàng"
                fnc={OrderHandler}
            />
            <OrderModal isOpen={isOpen} onClose={toggleModal}/>
        </div>
    )
}
const sampleData = {
    id: 1,
    type: {
        id:1,
        name: "Nhà"
    },
    user_id:2,
    contactName: "Phạm Tiến Thịnh",
    contactPhone: "0971933424",
    address:{
        city: {
            id: 1,
            name: "Hà Nội"
        },
        district: {
            id: 1,
            name: "Hoàn Kiếm"
        },
        ward: {
            id: 1,
            name: "Chương Dương"
        },
    },
    location: "Ngõ 210 bạch Đằng, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội",
    
}