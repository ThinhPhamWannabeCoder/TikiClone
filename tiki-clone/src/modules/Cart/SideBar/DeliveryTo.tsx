import ContentBox from "../../../components/Common/ContentBox";

interface propstype{
    addressType: string,
    address: string,
    usename: string,
    phone: string
}

export default function DeliveryTo(){
    // Get Delivery Location

    // User Id from Redux
    return(
        <ContentBox>
            <div className="flex justify-between items-center">
                <h2>Giao tới</h2>
                <p className="text-blue-500 cursor-pointer">Thay đổi</p>
            </div>
            <div className="font-semibold flex ">
                {/* Redux*/}
                <p className="border-r-2  pr-2">Phạm Tiến Thịnh</p>
                {/* Redux */}
                <p className="pl-2">0971933424</p>
            </div>
            <div>
                {/* Type */}
                 
                <span className="text-green-400 p-1 bg-green-100 rounded-sm">Nhà</span>
                <span className="mx-1">Ngõ 210 bạch Đằng, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội, Phường Chương Dương Độ, Quận Hoàn Kiếm, Hà Nội</span>

            </div>
        </ContentBox>
    )
}