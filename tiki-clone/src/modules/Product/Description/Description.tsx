const data = {
    description: [
        {
        title: 'Ưu điểm nổi bật',
        description: ['Sữa rửa mặt Simple giúp kiềm dầu & ngừa mụn Purifying - cho da dầu dễ nổi mụn & nhạy cảm với chất gel thanh khiết chứa chiết xuất Cây Phỉ-Witch Hazel, Cỏ Xạ Hương-Thyme, Kẽm, Prebiotic từ thực vật, Vitamin B3, cuốn đi bụi bẩn, tạp chất và dầu thừa, làm sạch da và giảm bóng nhờn, ngừa mụn hiệu quả.',
                      'Đặc biệt, sản phẩm không chứa chất tẩy da chết hóa học salicylic acid (BHA)-được biết đến là nguyên nhân gây khô da.' ,
                      'Ngoài ra còn bổ sung thêm Vitamin B3 giúp cấp cân bằng độ ẩm trên da, hạn chế làm da khô và tránh tình trạng tiết thêm dầu, ngăn ngừa mụn.' 
                    ],
        },
        {
        title: 'Hướng dẫn sử dụng',
        description: ['Cho một lượng sữa rửa mặt vừa đủ ra tay để tạo bọt cùng với nước, mát-xa sản phẩm lên da và rửa sạch với nước.',
                      'Sử dụng mỗi ngày hai lần sáng và tối.',
                      'Để đạt được hiệu quả tốt nhất, kết hợp dùng kèm Nước tẩy trang Simple Micellar Water trước khi rửa mặt và Nước hoa hồng Simple Soothing Toner sau khi rửa mặt.',
                    ]
        },
    ],
    message: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....'
    }

export default function Description(){
    return(
        <div>
            <h1 className="text-xl font-bold pb-3">Mô tả sản phẩm</h1>
            {data.description.map(des=>(
                <div className="py-2">
                    <h2 className="text-lg py-2 font-semibold">{des.title}</h2>
                    <ul className="pl-4">
                        {
                            des.description.map((detail, index) => (
                                
                                <li key={index}
                                    className="list-disc"
                                >
                                    {detail}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))}
            <p>
                {data.message}
            </p>
        </div>
    )
}