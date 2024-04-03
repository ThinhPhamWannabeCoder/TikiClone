import ContentBox from "../../../components/Common/ContentBox";
import Form from "./Form";
import OrderOption from "./OrderOption";
import StoreOrderBadge from "./StoreOrderBadge";

interface form{
    // product_id
    // {product name}
    
}
export default function OrderForm(){
    // STORE_ID
    // STAE


    // STORE ORDER

    // STATE ORDER
    // NUMBER
    // 

    return(
        <>
            <ContentBox class="w-3/12 h-full sticky top-2">
                <StoreOrderBadge/>

                <OrderOption/>

                <Form/>
            </ContentBox>
            
        </>
    )
}