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

export default function ImageSector(){
    return(
        <div className="flex flex-col gap-6">

            <div className=" w-full h-3/5 flex flex-col gap-2">
                <ImageSelector/>
            </div>
            <div className="h-2/5">
                <h1 className="font-semibold">Đặc điểm nổi bật</h1>
                {/* List Rendering */}

            <ul className="flex flex-col"> {/* Align list items vertically */}
                {data.character.map((x, index) => (
                    <li key={index} className="flex items-start"> {/* Align items horizontally and align them to the start */}
                        <CheckCircleIcon className="w-4 flex-shrink-0 mt-1 mr-2" /> {/* Add margin-top to align icon with the text */}
                        <span>{x}</span> {/* Wrap text in a span for better alignment */}
                    </li>
                ))}
            </ul>

                
            </div>
        </div>
    )
}