import ContentBox from "../../../components/Common/ContentBox";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from "./PaymentOptions";

export default function PaymentMainContent(){
    return(

        <div className="flex flex-col gap-3 w-3/4">
            
            <DeliveryOptions/>
            <PaymentOptions/>
            
        </div>
    )
}