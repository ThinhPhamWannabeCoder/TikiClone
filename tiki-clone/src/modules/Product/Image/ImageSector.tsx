import { CheckCircleIcon } from "@heroicons/react/24/solid"
import ImageSelector from "./ImageSelector"

const data = {
    images: {
        primaryImage: '',
        otherIamge: ['',''],
    },
    character: ['Chất gel thanh khiết với chiết xuất từ cây Phỉ-Witch Hazel, cỏ Xạ Hương-Thyme, Kẽm, Prebiotic từ thực vật, Vitamin B3 giúp làm sạch da, giảm bóng nhờn, ngừa mụn hiệu quả.',
                'Không chứa chất tẩy da chết hóa học salicylic acid (BHA), không chứa hóa chất gây hại cho da, hương liệu nhân tạo, phẩm màu nhân tạo, xà phòng, cồn, dầu khoáng, paraben.',
                'Được phát triển và nghiên cứu bởi các bác sĩ và chuyên gia da liễu, là thương hiệu chăm sóc da số 1 Anh Quốc.',
                ]

}

export default function ImageSector(prop: propsType){
    return(
        <div className="flex flex-col gap-6">

            <div className=" w-full h-3/5 flex flex-col gap-2">
                <ImageSelector/>
            </div>
            
        </div>
    )
}