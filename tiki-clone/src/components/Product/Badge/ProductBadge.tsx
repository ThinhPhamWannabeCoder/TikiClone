import { thinh_avatar } from "../../../assets/images/image"
const badgeData = {
    primaryUrl: thinh_avatar,
    name: 'Combo 2 Sữa rửa mặt Simple giúp kiềm dầu và ngừa mụn hiệu quả - cho da mụn nhạy cảm 150ml [CHÍNH HÃNG ĐỘC QUYỀN] [DIỆN MẠO MỚI]',
    price: 199.100,

}
// interface BadgeProp{
//     product_url: string,
//     name: string,
//     price: number
// }
export default function ProductBagde(){

    return(
        <div className="rounded-lg w-52 border-solid border-2 border-slate-300  overflow-hidden ">
            {/* Product Primary Images */}
            <img src={badgeData.primaryUrl} alt="Primary Image"  className="object-cover w-52 h-52 flex-shrink-0"/>

            <div className="px-3 flex flex-col gap-3">
                <p>{badgeData.name.length > 50 ? `${badgeData.name.slice(0, 50)}...` : badgeData.name}</p>
                <p className="font-semibold">{badgeData.price.toFixed(3)}</p>
            </div>
            
            
        </div>
    )
}