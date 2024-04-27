
import { useEffect, useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "./DeliveryTo";
import SumPrice from "./SumPrice";
import OrderModal from "../Modal/OrderModal";
import productApi from "../../../services/buyer.services";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// DON'T DO IT LIKE THIS -> FILTER -> GET DEFAULT THEN  SET

interface Delivery{
    id: number,
    name: string
    address: string,
    description: string,
    base_price: number,
    duration: string,
    default: boolean

}
export default function SideBar(){
    const [sumPrice, setSumPrice] = useState<number>(0)
    const [isOpen, setIsOpen] = useState(false);
    const [delivery, setDelivery] = useState<Delivery|undefined>(undefined)
    const carts = useSelector((state:RootState)=>state.cart)
    const navigate = useNavigate()
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const OrderHandler = ()=>{
    
        navigate("/checkout/payment")
        // toggleModal()
    }

    useEffect(()=>{

        let sum = 0;
        carts.raw.filter(item=>carts.selectedCarts.includes(item.id)).forEach(item=>{
            sum+= item.quantity * item.product.price
        })

        setSumPrice(sum)

    },[carts])
    useEffect(()=>{
        productApi.getDelivery()
            .then(res=>{  
                setDelivery(res.data[0])
            })

            // .then()
            .catch(err =>{
                console.log(err.message)
            })
    },[])
    if(delivery?.base_price === undefined){
        return "waiting" 
    }
    return(
        <div className="flex flex-col gap-3 w-1/4">
            <DeliveryTo />
            <SumPrice
                sumProductPrice={sumPrice}
            />
            <PrimaryButton 
                name="Mua hàng"
                fnc={OrderHandler}
            />
            <OrderModal isOpen={isOpen} onClose={toggleModal}/>
        </div>
    )
}
