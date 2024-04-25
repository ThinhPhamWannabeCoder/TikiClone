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
import { deleteAll, selectAll } from "../../../../redux/cart/cartSlice"
import productApi from "../../../../services/buyer.services"


export default function CartMainHeader(){
    const carts = useSelector((state:RootState) => state.cart)

    const dispatch = useDispatch()
    const hanldeDeleteAll = ()=>{

        const cartIds = carts.raw.map(item => item.id)
        productApi.deleteByIds({ids: [...cartIds]})
        .then(res=>{
            if(res.data.status === 200){
                console.log("good bro")
                dispatch(deleteAll())
            }
        })
        .catch(err =>{
            console.log(err.message)
        })
      
        // UPDATE REDUX
    }
    return(
        <OrderLayout class="text-slate-500">
            {/* <OrderProductName name="Tất Cả"/> */}
            <OrderProductFirstSection class="flex gap-1">
                <input 
                    type="checkbox"
                    checked={carts.all}
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
                <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>hanldeDeleteAll()} />

            </OrderProductFinalSection>
        </OrderLayout>
            
    )
}