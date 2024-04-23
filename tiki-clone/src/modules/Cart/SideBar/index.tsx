
import { useEffect, useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";
import { useNavigate } from "react-router-dom";
import OrderModal from "../Modal/OrderModal";
import productApi from "../../../services/buyer.services";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

interface propsType{
    data: object[],
    selectedCarts: number[],
}
// DON'T DO IT LIKE THIS -> FILTER -> GET DEFAULT THEN  SET
interface UserAddresses{
    id: number,
    type: string,
    address: string,
    contact_name: string,
    contact_mobile: string,
    default: string
}
export default function SideBar(prop: propsType){
    const user = useSelector((state: RootState)=>state.auth.user)

    const [sumPrice, setSumPrice] = useState<number>(0)
    // const [activeDeliveryId, setActiveDeliveryId] = useState<number>(2);
    const [isOpen, setIsOpen] = useState(false);
    const [activeAddress, setActiveAddress] = useState<number>()
    const [addresses, setAddresses] = useState<UserAddresses[]|undefined>(undefined)

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const OrderHandler = ()=>{

        const orderData = prop.data.filter(item=>prop.selectedCarts.includes(item.id)).map(item=> {
            return {
                id: item.id,
                productId: item.product.id,
                quantity: item.quantity,
            }
        })

        console.log(orderData)
        toggleModal()
    }
    const activeAddressHanlder = (addressId: number)=>{
        setActiveAddress(addressId)
    }
    useEffect(()=>{
        let sum = 0;

        prop.data.filter(item=>prop.selectedCarts.includes(item.id)).forEach(item=>{
            sum+= item.quantity * item.product.price
        })

        setSumPrice(sum)

    },[prop.selectedCarts])
    useEffect(()=>{
        productApi.getAddress( {userId: user?.id as number, default: true})
            .then(res=>{
                // setActiveAddress(res.data)
                // console.log(res.data)
                // res.data.forEach((item,index)=>{
                //     if(item.default == true){
                //         setActiveAddress(index)
                //     }
                // })
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err.message)
            })
    },[])

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