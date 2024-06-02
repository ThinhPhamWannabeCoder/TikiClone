import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import SecondaryTitle from "../../../components/Title/SecondaryTitle";
import { PriceRangeOption, PriceRangeType } from "../../../types/home.types";
import { formatCurrency, parseCurrency } from "../../../utils/common";
import PriceOption from "./PriceOption";

const mockData:PriceRangeType = {
    first_quatile:  300000,
    third_quatile:  1100000,

}
interface PropTypes {
    priceRange: PriceRangeType,
    setPriceRange: (input: PriceRangeType)=>void,
    priceOptions: PriceRangeOption,
    setPriceOptions: (input: PriceRangeOption) => void,

}
export default function PriceRange(props: PropTypes){
    
    const handleFirstQuatile = () => {
        
        if(props.priceRange?.first_quatile && props.priceRange?.third_quatile){
            props.setPriceRange({
                first_quatile: mockData.first_quatile,
                third_quatile:  0
            })
        }
        else{
            props.setPriceRange({
                first_quatile: props.priceRange?.first_quatile ? 0 : mockData.first_quatile,
                third_quatile: 0
            })
        }
    }
    const handleThirdQuatile = () => {
        
        if(props.priceRange?.first_quatile && props.priceRange?.third_quatile){
            props.setPriceRange({
                first_quatile: 0 ,
                third_quatile:  mockData.third_quatile,
            })
        }
        else{
            props.setPriceRange({
                first_quatile: 0,
                third_quatile: props.priceRange?.third_quatile ? 0 : mockData.third_quatile,
            })
        }
    }
    const handleMiddle = () => {
        if(props.priceRange?.first_quatile && props.priceRange?.third_quatile){
            props.setPriceRange({
                first_quatile: 0 ,
                third_quatile:  0 ,
            })
        }
        else{
            props.setPriceRange({
                first_quatile: mockData.first_quatile,
                third_quatile:  mockData.third_quatile,
            })
        }
        
    }
    const handleFromInput = (e)=>{
        // console.log(e.target.value)
        const value = parseCurrency(e.target.value);

        // Kiểm tra nếu giá trị chỉ chứa các ký tự số
        if (/^\d*$/.test(value)) {
            const parsedValue = parseInt(value);

            // Kiểm tra nếu giá trị là một số hợp lệ và lớn hơn 0
            if (!isNaN(parsedValue) && parsedValue > 0) {
                props.setPriceOptions({
                ...props.priceOptions, // Giữ lại các giá trị hiện tại trong priceOptions
                from: parsedValue, // Cập nhật giá trị from
                });
            } else if (value === '') {
                // Nếu input là chuỗi rỗng, đặt giá trị from là -1
                props.setPriceOptions({
                ...props.priceOptions,
                from: -1,
                });
            }
        }
    }
    const handleToInput = (e)=>{
         // console.log(e.target.value)
         const value = parseCurrency(e.target.value);
        //NEED TO PARSE FROM LOCALE BACK TO NUMBER


         // Kiểm tra nếu giá trị chỉ chứa các ký tự số
         if (/^\d*$/.test(value)) {
             const parsedValue = parseInt(value);
 
             // Kiểm tra nếu giá trị là một số hợp lệ và lớn hơn 0
             if (!isNaN(parsedValue) && parsedValue > 0) {
                 props.setPriceOptions({
                 ...props.priceOptions, // Giữ lại các giá trị hiện tại trong priceOptions
                 to: parsedValue, // Cập nhật giá trị from
                 });
             } else if (value === '') {
                 // Nếu input là chuỗi rỗng, đặt giá trị from là -1
                 props.setPriceOptions({
                 ...props.priceOptions,
                 to: -1,
                 });
             }
         }
    }
    const handleDeleteInputs = () =>{
        // console.log("Delete")
        props.setPriceOptions({
            from: -1,
            to: -1,
        })
    }
    return(
        <>
            <SecondaryTitle name="Giá"/>
            <div className="flex flex-col gap-3">
                <div >
                    <span 
                        className={"border-2 rounded-full px-4 py-1 cursor-pointer  " 
                                + (props.priceRange?.first_quatile >0 && props.priceRange?.third_quatile == 0
                                    ? 'bg-slate-200'
                                    : 'hover:bg-slate-100')}
                        onClick={()=>{handleFirstQuatile()}}
                    >
                        {'Dưới ' + formatCurrency(mockData.first_quatile)}

                    </span>
                </div>
                <div>
                    <span 
                        className={"border-2 rounded-full px-4 py-1 cursor-pointer " 
                        + (props.priceRange?.first_quatile >0 && props.priceRange?.third_quatile > 0
                            ? 'bg-slate-200'
                            : 'hover:bg-slate-100')}
                        onClick={()=>handleMiddle()}
                    >
                        {formatCurrency(mockData.first_quatile) + ' - ' + formatCurrency(mockData.third_quatile)}
                    </span>

                </div>
                <div>
                    <span 
                        className={"border-2 rounded-full px-4 py-1 cursor-pointer " 
                        + (props.priceRange?.first_quatile == 0 && props.priceRange?.third_quatile > 0
                            ? 'bg-slate-200'
                            : 'hover:bg-slate-100')}
                        onClick={()=>{handleThirdQuatile()}}
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
                        value={props.priceOptions.from === -1 ? '' : formatCurrency(props.priceOptions.from)}                        
                        onChange={handleFromInput} // Gọi hàm handleFromInput đúng cách

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
                        value={props.priceOptions.to === -1 ? '' : formatCurrency(props.priceOptions.to)}                        
                        onChange={handleToInput} // Gọi hàm handleFromInput đúng cách
                        className="hover:border-slate-400 transition duration-200 focus:border-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span>₫</span>
                    {/* <img src="https://salt.tikicdn.com/ts/upload/1f/f9/28/fae2aa73d63bd27bd330055c37a74e90.png"/> */}
                </div>
                <p className="text-sm text-slate-600">Giá trị đầu phải nhỏ hơn hoặc bằng giá trị sau</p>
            <div onClick={()=>handleDeleteInputs()} className="border-2 rounded-full cursor-pointer">Xoá</div>
</div>


        </>
    )
}