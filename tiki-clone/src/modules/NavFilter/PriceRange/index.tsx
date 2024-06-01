import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import SecondaryTitle from "../../../components/Title/SecondaryTitle";
import { formatCurrency } from "../../../utils/common";
import PriceOption from "./PriceOption";

const mockData = {
    first_quatile:  300000,
    third_quatile:  1100000,

}
export default function PriceRange(){
    
    const hanldeInputChange = () =>{

    }
    
    return(
        <>
            <SecondaryTitle name="Giá"/>
            <div className="flex flex-col gap-3">
                <div >
                    <span 
                        className="border-2 rounded-full px-4 py-1 cursor-pointer"
                    >
                        {'Dưới ' + formatCurrency(mockData.first_quatile)}

                    </span>
                </div>
                <div>
                    <span 
                        className="border-2 rounded-full px-4 py-1 cursor-pointer"
                    >
                        {formatCurrency(mockData.first_quatile) + ' - ' + formatCurrency(mockData.third_quatile)}
                    </span>

                </div>
                <div>
                    <span 
                        className="border-2 rounded-full px-4 py-1 cursor-pointer"
                    >
                       {'Trên ' + formatCurrency(mockData.third_quatile)}
                    </span>

                </div>
            </div>
            <SecondaryTitle name="Khoảng giá"/>
            
            <div className="">
    <div className="flex items-center gap-2">
        <input
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Từ"
            type="text"
            className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <span>₫</span>
        {/* <img src="https://salt.tikicdn.com/ts/upload/1f/f9/28/fae2aa73d63bd27bd330055c37a74e90.png"/> */}
    </div>
    <span>-</span>
    <div className="flex items-center gap-2">
        <input
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Đến"
            type="text"
            className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <span>₫</span>
        {/* <img src="https://salt.tikicdn.com/ts/upload/1f/f9/28/fae2aa73d63bd27bd330055c37a74e90.png"/> */}
    </div>
    <p className="text-sm text-slate-600">Giá trị đầu phải nhỏ hơn hoặc bằng giá trị sau</p>
    <div className="btn-delete">Xoá</div>
</div>


        </>
    )
}