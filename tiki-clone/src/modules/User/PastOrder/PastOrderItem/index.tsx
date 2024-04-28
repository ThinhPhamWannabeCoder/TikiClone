import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import ContentBox from "../../../../components/Common/ContentBox";
import { PastOrderItemType } from "../../../../types/user.types";
const ASSET_API = import.meta.env.VITE_ASSETS_URL

interface propType{
    item: PastOrderItemType
}
export default function PastOrderItem(props: propType){
    return(
        // DON'T NEED STORE
        <ContentBox class="p-6">
            {/* STATUTS */}
            <div className="text-slate-500 border-b border-slate-500 pb-3">
                {/* Giao hàng thành công */}
                {props.item.status}
            </div>
            <div className="">
                {props.item.orders.map(item=> (
                    <div className="border-b border-slate-500 py-3 flex " key={item.id}>
                        <img src={`${ASSET_API}${item.image}`} alt="" srcSet="" className="w-24 h-24 object-cover rounded-md"/>
                        <div className=" w-full ml-3">
                            <div className="flex justify-between w-full">
                                <div>{item.name}</div>
                                <div>{item.totalProductPrice} ₫</div>
                            </div>
                            <div className="text-slate-400 flex items-center gap-2">
                                <BuildingStorefrontIcon className="w-5 h-5"/>
                                {item.store}
                            </div>
                        </div>
                        
                    </div>
                ))}
                
            
                
                
            </div>
            <div className="pt-3 text-right">
                Tổng tiền: {props.item.totalPrice} ₫
            </div>
            
        </ContentBox>
    )
}