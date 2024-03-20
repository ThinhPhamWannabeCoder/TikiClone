import ContentBox from "../../../components/Common/ContentBox";
import { thinh_avatar } from "../../../assets/images/image";
const data={
    avatar: thinh_avatar,
    transactionNumber: 500
}
export default function StoreOrderBadge(){
    return(
            <div className="border-slate-200 border-b-2 flex gap-3 pb-5">
                <img src={thinh_avatar} className="aspect-square rounded-full object-cover h-16" alt="" />
                <div className="flex flex-col justify-between">
                    <h1 className="font-semibold text-lg">Tiki Trading</h1>
                    <p className="text-slate-500">{`(${data.transactionNumber} Lượt mua)`}</p>
                </div>
            </div>

    )
}