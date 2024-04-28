import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function UserAddressItem(){
    return(
        <>
        <div className="flex flex-col gap-3">
            <div  className="flex justify-between">
                <div className="flex gap-3">
                    <span> PHẠM TIẾN THỊNH</span>
                    <span className="text-green-600 flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5"/> Địa chỉ mặc định</span>
                </div>
                <div>
                    <span className="text-blue-500">Chỉnh sửa</span>

                </div>
            </div>
            <div>
                <div>
                    <span className="text-slate-500">Địa chỉ: </span>
                    <span>Ngõ 210 bạch Đằng, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội</span>
                </div>
                <div>
                    <span className="text-slate-500">Điện thoại: </span>
                    <span>0971933424</span>
                </div>
            </div>
        </div>
            
        </>
    )
}