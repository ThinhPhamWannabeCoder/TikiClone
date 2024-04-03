import { thinh_avatar } from "../../assets/images/image"
const badgeData = {
    primaryUrl: thinh_avatar,
    name: 'Combo 2 Sữa rửa mặt Simple giúp kiềm dầu và ngừa mụn hiệu quả - cho da mụn nhạy cảm 150ml [CHÍNH HÃNG ĐỘC QUYỀN] [DIỆN MẠO MỚI]',
    price: 199.100,

}
interface BadgeProp{
    product_url?: string,
    name?: string,
    price?: number,
}
export default function ProductBagde(props : BadgeProp){
    return( <div>t</div>
        // <div className="rounded-lg  border-solid border-2 border-slate-300  overflow-hidden hover:shadow-xl">
        //     {/* Product Primary Images */}
        //     <img src={`http://localhost:1337${props.product_url}`} alt="Primary Image"  className="object-cover w-48 h-48 flex-shrink-0"/>

        //     <div className="px-3 flex flex-col gap-3">
        //         <p className="text-sm">{props.name.length > 50 ? `${props.name.slice(0, 50)}...` : props.name}</p>
        //         <p className="font-semibold">{props.price}</p>
        //     </div>
            
        // </div>
    )
}