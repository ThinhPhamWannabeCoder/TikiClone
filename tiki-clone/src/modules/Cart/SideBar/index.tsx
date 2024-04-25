
import { useEffect, useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";
import OrderModal from "../Modal/OrderModal";
import productApi from "../../../services/buyer.services";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

interface propsType{
    data: object[],
    selectedCarts: number[],
}
// DON'T DO IT LIKE THIS -> FILTER -> GET DEFAULT THEN  SET
interface UserAddress{
    id: number,
    type: string,
    address: string,
    contact_name: string,
    contact_mobile: string,
    default: string
}
interface Delivery{
    id: number,
    name: string
    address: string,
    description: string,
    base_price: number,
    duration: string,
    default: boolean

}
export default function SideBar(prop: propsType){
    const user = useSelector((state: RootState)=>state.auth.user)
    const [sumPrice, setSumPrice] = useState<number>(0)
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState<UserAddress|undefined>(undefined)
    const [delivery, setDelivery] = useState<Delivery|undefined>(undefined)
    const selectedCart = useSelector((state:RootState)=>state.cart.selectedCarts)
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const OrderHandler = ()=>{
    

        toggleModal()
    }

    useEffect(()=>{

        let sum = 0;
        prop.data.filter(item=>selectedCart.includes(item.id)).forEach(item=>{
            sum+= item.quantity * item.product.price
        })

        setSumPrice(sum)

    },[selectedCart])
    useEffect(()=>{
        productApi.getAddress( {userId: user?.id as number, default: true})
            .then(res=>{  
                setAddress(res.data[0])
                return productApi.getDelivery()
            })
            .then(res=>{
                setDelivery(res.data[0])
            })
            // .then()
            .catch(err =>{
                console.log(err.message)
            })
    },[])
    if(address === undefined || delivery?.base_price === undefined){
        return "waiting" 
    }
    return(
        <div className="flex flex-col gap-3 w-1/5">
            <DeliveryTo data={address as UserAddress} setAddress={setAddress}/>
            <SumPrice
                sumProductPrice={sumPrice}
                deliveryPrice={delivery.base_price}
            />
            <PrimaryButton 
                name="Mua hàng"
                fnc={OrderHandler}
            />
            <OrderModal isOpen={isOpen} onClose={toggleModal}/>
        </div>
    )
}
