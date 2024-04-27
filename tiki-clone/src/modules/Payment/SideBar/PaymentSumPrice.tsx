import ContentBox from "../../../components/Common/ContentBox";
import SecondaryTitle from "../../../components/Title/SecondaryTitle";

interface propType{
    productPrice: number,
    deliveryPrice: number
}
export default function PaymentSumPrice(){
    return(
        <ContentBox class="flex flex-col gap-2 ">
            <SecondaryTitle name="Đơn hàng"/>
            <div className="flex flex-col gap-3 border-t border-b border-gray-500 py-3 my-3">
                <div className="flex justify-between">
                    <div className="text-slate-600">Tạm tính</div>
                    <div className="font-semibold">Sum ₫</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-slate-600">Phí vận chuyển</div>
                    <div className="font-semibold">Delivery ₫</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="font-semibold">Tổng tiền</div>
                <div className="font-bold text-lg text-red-500">Delivery ₫</div>
            </div>
        </ContentBox>
    )
}