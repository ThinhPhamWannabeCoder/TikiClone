import { TrashIcon } from "@heroicons/react/24/outline"
import ContentBox from "../../../../components/Common/ContentBox"
import OrderProductName from "../../../../components/Order/OrderDetail/OrderProductName"
import OrderTotalPrice from "../../../../components/Order/OrderDetail/OrderTotalPrice"
import OrderProductFirstSection from "../../../../components/Order/OrderDetail/OrderProductFirstSection"
import OrderLayout from "../../../../components/Order/OrderLayout"
import OrderProductPrice from "../../../../components/Order/OrderDetail/OrderProductPrice"
import OrderProductQuantity from "../../../../components/Order/OrderDetail/OrderProductQuantity"
import OrderProductFinalSection from "../../../../components/Order/OrderDetail/OrderProductFinalSection"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { selectAll } from "../../../../redux/cart/cartSlice"

interface propsType{
    hanldeDeleteAll: ()=>void,

}
export default function CartMainHeader(prop: propsType){
    const allState = useSelector((state:RootState)=> state.cart.all)
    const dispatch = useDispatch()
    return(
        <OrderLayout class="text-slate-500">
            {/* <OrderProductName name="Tất Cả"/> */}
            <OrderProductFirstSection class="flex gap-1">
                <input 
                    type="checkbox"
                    checked={allState}
                    onChange={()=>dispatch(selectAll())}
                    className="cursor-pointer" 
                />
                <p>Tất cả</p>
            </OrderProductFirstSection>
            <OrderProductPrice>
                <p>Đơn giá</p>
            </OrderProductPrice>
            {/* <OrderProductPrice message="Đơn giá"/> */}
            <OrderProductQuantity>
                <p>Số lượng</p>
            </OrderProductQuantity>
            <OrderProductFinalSection class="flex justify-between items-center">
                <p>Thành tiền</p>
                <TrashIcon className="w-6 h-6 cursor-pointer" onClick={prop.hanldeDeleteAll} />

            </OrderProductFinalSection>
        </OrderLayout>
            
    )
}