import OrderLayout from "../../../../components/Order/OrderLayout";
import CartCard from "./CartCard";

export default function StoreCart(){
    return(
        <OrderLayout>
            <div className="flex gap-1 col-span-9 ">
                <input type="checkbox" name="" id="" className="cursor-pointer" />
                <p className="font-semibold">Cửa hàng</p>
            </div>
            <div className="flex flex-col col-span-9">
                <CartCard/>
                <CartCard/>
                <CartCard/>
            </div>
        </OrderLayout>
    )
}