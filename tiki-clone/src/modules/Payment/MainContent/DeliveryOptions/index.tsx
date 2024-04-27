import ContentBox from "../../../../components/Common/ContentBox";
import PrimaryTitle from "../../../../components/Title/PrimaryTitle";
import DeliveryOptionList from "./DeliveryOptionList";
import ProductOrderList from "./ProductOrderList";

export default function DeliveryOptions(){
    return(
        <ContentBox class="flex flex-col gap-3">
            <PrimaryTitle name="Chọn hình thức giao hàng"/>
            <DeliveryOptionList/>
            <ProductOrderList/>
        </ContentBox>
    )
}