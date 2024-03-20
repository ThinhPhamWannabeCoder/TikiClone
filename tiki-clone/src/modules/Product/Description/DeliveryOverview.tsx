import { Link } from "react-router-dom"

const data ={
    address: 'Q. Hoàn Kiếm, P.Hàng Trống, Hà Nội',
}
// Delivery option
// const delivery = ]
export default function DeliveryOverview(){
    // Dung theo logic thi se phai dung dia chi de render gia tien
    return (
        <div>
            <h1 className="font-semibold text-lg pb-3">Thông tin vận chuyển</h1>
            <div className="flex justify-between items-center">
                <p>{`Giao đến địa chỉ ${data.address}`}</p>
                <Link to="/" className="text-blue-600"> Đổi</Link>
            </div>
            {/* Option */}
            {/* Handle how to process right here */}
        </div>

    )
}