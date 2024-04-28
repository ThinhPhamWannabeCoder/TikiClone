import { useSelector } from "react-redux";
import ContentBox from "../../../components/Common/ContentBox";
import SecondaryTitle from "../../../components/Title/SecondaryTitle";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";


export default function PaymentSumPrice(){
    const order = useSelector((state: RootState) => state.order)
    const [total, setTotal] = useState<number>(0)
    const [deliveryCost, setDeliveryCost] = useState<number>(0)
    useEffect(()=>{
        let temp = 0
        order.carts.forEach(item=>{
            temp += item.quantity * item.product.price
        })
        setTotal(temp)
        let deliveryTemp = 0
        order.orders.forEach(item => {
            deliveryTemp += order.deliveryPrice
        })
        setDeliveryCost(deliveryTemp)
    },[order])
    return(
        <ContentBox class="flex flex-col gap-2 ">
            <SecondaryTitle name="Đơn hàng"/>
            <div className="flex flex-col gap-3 border-t border-b border-gray-500 py-3 my-3">
                <div className="flex justify-between">
                    <div className="text-slate-600">Tạm tính</div>
                    <div className="font-semibold">{total} ₫</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-slate-600">Phí vận chuyển</div>
                    <div className="font-semibold">{order.deliveryPrice?.toLocaleString('de-DE')} ₫</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="font-semibold">Tổng tiền</div>
                <div className="font-bold text-lg text-red-500">{(deliveryCost + total).toLocaleString('de-DE')} ₫</div>
            </div>
        </ContentBox>
    )
}