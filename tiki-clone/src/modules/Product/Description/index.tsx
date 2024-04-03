import ContentBox from "../../../components/Common/ContentBox";
import DeliveryOverview from "./DeliveryOverview";
import Description from "./Description";
import Detail from "./Detail";
import Overview from "./Overview";

const data ={
    name: 'Combo 2 Sữa rửa mặt Simple giúp kiềm dầu và ngừa mụn hiệu quả - cho da mụn nhạy cảm 150ml [CHÍNH HÃNG ĐỘC QUYỀN] [DIỆN MẠO MỚI]',
    price: 198.000
}

interface propsType{
    name: string,
    price: number,
    detail:{
        title: string,
        desc: string
    }[],
    desc:  {
        title: string,
        desc: string[]
    }[]
    
}

export default function ProductDescription(prop: propsType){
    return(
        <div className="w-5/12 flex flex-col gap-4 h-full">
            
            <Overview name={prop.name} price={prop.price}/>
            <DeliveryOverview/>
            <Detail data = {prop.detail}/>
            <Description data={prop.desc}/>
        </div>
    )
}


const desc = [
    // description: [
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
    // ],
    // message: 'Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....'
]

const test=[

    {
        title: 'Thương hiệu',
        detail: 'SIMPLE',
    },
    {
        title: 'Xuất xứ thương hiệu',
        detail: 'Ba Lan',
    },
    {
        title: 'Xuất xứ (Made in)',
        detail: 'Ba Lan',
    },
    {
        title: 'Thành phần',
        detail: 'Aqua, Hamamelis Virginiana Leaf Water, Cocamidopropyl Betaine, Glycerin, Sodium Laureth Sulfate, PEG-7 Glyceryl Cocoate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Benzophenone-4, Citric Acid, Hydrated Silica, Hydroxypropyl Cyclodextrin, Iodopropynyl Butylcarbamate, Niacinamide, Panthenol, Pantolactone, Phenoxyethanol, Potassium Sorbate, Sodium Benzoate, Sodium Chloride, Sodium Hydroxide, Thymus Vulgaris Flower/Leaf Extract, Xanthan Gum, Zinc PCA.',
    },
    {
        title: 'Hạn sử dụng',
        detail: '3 năm kể từ ngày sản xuất',
    },
    {
        title: 'Loại da phù hợp',
        detail: 'Da dầu, Da thường',
    },
    {
        title: 'Sản phẩm có được bảo hành không?',
        detail: 'Không',
    }
]
const pp ={
    name: "Thinh apple",
    price: 1000000,
    desc: desc,
    test: test,
}
