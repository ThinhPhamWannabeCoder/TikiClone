import { useSelector } from "react-redux";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "../../Cart/SideBar/DeliveryTo";
import PaymentSumPrice from "./PaymentSumPrice";
import { RootState } from "../../../redux/store";
import { OrderPayload } from "../../../types/user.types";
import productApi from "../../../services/buyer.services";
import { useNavigate } from "react-router-dom";

export default function PaymentSideBar(){
    //  ORDER USE SELECTOR
    const order = useSelector((state:RootState) => state.order)
    const navigate = useNavigate()
    const handleOrder = ()=>{
        // console.log("hi")
        const requestBody:OrderPayload = {
            userId: order.userId as number,
            addressId: order.addressId as number,
            deliveryId: order.deliveryId as number,
            paymentId: order.paymentId as number,
            orders: order.orders
        }
        console.log(requestBody)
        productApi.createOrders(requestBody)
            .then(res =>{
                if(res.data.status == 204){
                    alert("Dat hang thanh cong")
                    navigate("/user/order")
                }
                else{
                    console.log("Something went wrong")
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return(

        <div className="flex flex-col gap-3 w-1/4">
            
            {/* <DeliveryTo/> */}
            <DeliveryTo/>
            <PaymentSumPrice/>
            <PrimaryButton
                name="Đặt hàng"
                fnc={handleOrder}
            />
        </div>
    )
}