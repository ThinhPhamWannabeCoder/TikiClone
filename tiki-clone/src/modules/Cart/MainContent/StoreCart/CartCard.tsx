import { TrashIcon } from "@heroicons/react/24/outline";
import ContentBox from "../../../../components/Common/ContentBox";
import OrderProductFirstSection from "../../../../components/Order/OrderDetail/OrderProductFirstSection";
import OrderProductPrice from "../../../../components/Order/OrderDetail/OrderProductPrice";
import OrderProductQuantity from "../../../../components/Order/OrderDetail/OrderProductQuantity";
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection";

export default function CartCard(){
    return (
        <div className="py-4 grid grid-cols-9">
            {/* <OrderProductName name="Tất Cả"/> */}
            <OrderProductFirstSection class="flex gap-1">
                <input type="checkbox" name="" id="" className="cursor-pointer" />
                <p>Sản phẩm</p>
            </OrderProductFirstSection>
            <OrderProductPrice>
                <p>100.000</p>
            </OrderProductPrice>
            {/* <OrderProductPrice message="Đơn giá"/> */}
            <OrderProductQuantity>
                <p>2</p>
            </OrderProductQuantity>
            <OrderProductFinalSection class="flex justify-between items-center">
                <p>200.000</p>
                <TrashIcon className="w-6 h-6 cursor-pointer" />

            </OrderProductFinalSection>
            
        </div>
        
    )
}