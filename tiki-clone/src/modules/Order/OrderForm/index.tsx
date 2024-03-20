import ContentBox from "../../../components/Common/ContentBox";
import Form from "./Form";
import OrderOption from "./OrderOption";
import StoreOrderBadge from "./StoreOrderBadge";

export default function OrderForm(){
    return(
        <>
            <ContentBox class="w-3/12">
                <StoreOrderBadge/>
                <OrderOption/>
                <Form/>
            </ContentBox>
            
        </>
    )
}