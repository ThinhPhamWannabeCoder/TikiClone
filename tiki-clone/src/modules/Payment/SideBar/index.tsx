import PrimaryButton from "../../../components/Button/PrimaryButton";
import DeliveryTo from "../../Cart/SideBar/DeliveryTo";
import PaymentSumPrice from "./PaymentSumPrice";

export default function PaymentSideBar(){
    //  ORDER USE SELECTOR
    const handleOrder = ()=>{
        console.log("hi")
        // API SEND
        // MODAL CONFIRM
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