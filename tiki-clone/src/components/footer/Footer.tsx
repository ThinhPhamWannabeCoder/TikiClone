import { PhoneIcon } from "@heroicons/react/24/outline";
import ContentBox from "../Common/ContentBox";
import { useEffect, useState } from "react";
import { PaymentOptionsType } from "../../types/user.types";
import productApi from "../../services/buyer.services";
const ASSET_API = import.meta.env.VITE_ASSETS_URL

export default function Footer(){
    const [paymentOptions, setPaymentOptions] = useState<PaymentOptionsType[]>([])

    useEffect(()=>{
        productApi.getPayments()
            .then(res =>{
                // console.log(res.data)
                setPaymentOptions(res.data)
               
            })
            .catch(err => {
                console.log(err.message)
            })
    },[])
    return (
        <ContentBox class="mt-5">
<footer id="footer">
            <div id="main_footer" className="grid grid-cols-5 gap-2">
                <div>
                    <h1 className="font-bold text-lg">Hỗ trợ khách hàng</h1>
                    <div>Hotline: 1900-6035</div>
                    <div>Các câu hỏi thường gặp</div>
                    <div>Gửi yêu cầu hỗ trợ</div>
                    <div>Hướng dẫn đặt hàng</div>
                    <div>Phương thức vận chuyển</div>
                    <div>Chính sách đổi trả</div>
                    <div>Hướng dẫn trả góp</div>
                    <div>Chính sách hàng nhập khẩu</div>
                    <div>Hỗ trợ khách hàng: hotro@tiki.vn</div>
                    <div>Báo lỗi bảo mật: security@tiki.vn</div>
                </div>
                <div>
                    <h1 className="font-bold text-lg">Về Tiki</h1>
                    <div>Giới thiệu Tiki</div>
                    <div>Tiki Blog</div>
                    <div>Tuyển dụng</div>
                    <div>Chính sách bảo mật thanh toán</div>
                    <div>Chính sách bảo mật thông tin cá nhân</div>
                    <div>Chính sách giải quyết khiếu nại</div>
                    <div>Điều khoản sử dụng</div>
                    <div>Giới thiệu Tiki Xu</div>
                    <div>Tiếp thị liên kết cùng Tiki</div>
                    <div>Bán hàng doanh nghiệp</div>
                    <div>Điều kiện vận chuyển</div>
                </div>
                <div>
                    <h1 className="font-bold text-lg">Hợp tác và liên kết</h1>

                    <div>Quy chế hoạt động Sàn GDTMĐT</div>
                    <div>Bán hàng cùng Tiki</div>

                </div>
                <div>
                    <h1 className="font-bold text-lg">Phương thức thanh toán</h1>

                    <div className="flex gap-3 mt-2">
                        {paymentOptions.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center">
                            
                                <div className="flex items-center">
                                    <img src={`${ASSET_API}${item.Icon.url}`} alt="" className="object-cover mr-3  w-10 h-10" />
                                    {/* <span>{item.name}</span> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-lg">Kết nối với trúng tôi</h1>

                    <div className="flex gap-3 mt-2"> <PhoneIcon className="w-5 h-5"/>  0966068866</div>
                    
                </div>
                <div className="col-span-5 my-5 border-b border-slate-300 pb-4" id="about">
                    <h1 className="font-bold text-xl">Công ty TNHH TIKI</h1>
                    <p>Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh</p>
                    <p>Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.</p>
                    <p>Hotline: 1900 6035</p>

                </div>
                <div className="col-span-5 flex flex-col gap-3 border-b border-slate-300 pb-4" id="about">
                    <h1 className="font-bold text-xl">Tiki - Thật nhanh, thật chất lượng, thật rẻ</h1>
                    <h3 className="font-bold text-lg text-slate-500 ">Tiki có tất cả</h3>
                    <p>Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn loại mặt hàng từ Điện thoại smartphone tới Rau củ quả tươi, kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</p>
                    <h3 className="font-bold text-lg slate-500">Khuyến mãi, ưu đãi tràn ngập</h3>
                    <p>Bạn muốn săn giá sốc, Tiki có giá sốc mỗi ngày cho bạn! Bạn là tín đồ của các thương hiệu, các cửa hàng Official chính hãng đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong chương trình Freeship+, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói TikiNOW tiết kiệm để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, thẻ tín dụng Tiki hoàn tiền 15% trên mọi giao dịch (tối đa hoàn 600k/tháng)</p>

                </div>
            </div>

        </footer>
        </ContentBox>
        
    )
}