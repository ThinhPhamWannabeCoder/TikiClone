import Header from "./Header";
import MainContent from "./MainContent";

export default function PastOrders(){
    return(
        <div className="flex flex-col gap-3">
            <Header/>
            <MainContent/>

        </div>
       
    )
}
const orderStatuses = [
    "Đã đặt hàng",
    "Đã nhận đơn",
    "Đang chuẩn bị hàng",
    "Đang vận chuyển",
    "Đang giao",
    "Giao hàng thành công",
    "Giao hàng thất bại"
  ];