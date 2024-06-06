import PrimaryTitle from "../../../components/Title/PrimaryTitle";
import SecondaryTitle from "../../../components/Title/SecondaryTitle";
import { PriceRangeOption, PriceRangeType } from "../../../types/home.types";
import { formatCurrency, parseCurrency } from "../../../utils/common";
import PriceOption from "./PriceOption";

const mockData:PriceRangeType = {
    first_quatile:  300000,
    third_quatile:  1100000,

}
const trueMoc:number[] = [300000, 1100000];
interface PropTypes {
    priceRange: number[],
    setPriceRange: (input: number[])=>void,
    priceOptions: PriceRangeOption,
    setPriceOptions: (input: PriceRangeOption) => void,
 
    handleDeleteInputs: () => void

}
export default function PriceRange(props: PropTypes){
    
    const handleFromInput = (e)=>{
        // console.log(e.target.value)
        const value = parseCurrency(e.target.value);

        // Kiểm tra nếu giá trị chỉ chứa các ký tự số
        if (/^\d*$/.test(value)) {
            const parsedValue = parseInt(value);

            // Kiểm tra nếu giá trị là một số hợp lệ và lớn hơn 0
            if (!isNaN(parsedValue) && parsedValue > 0) {
                //CÂP NHẬT GIÁ TRỊ
                if(props.priceRange[0] == mockData[0] || props.priceRange[1] == mockData[1] ){
                    props.setPriceRange([parsedValue, 0])
                }
                else{
                    props.setPriceRange([parsedValue,props.priceRange[1]])
                }
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
        // props.setPriceRange(...props.priceRange)
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
                if(props.priceRange[0] == mockData[0] || props.priceRange[1] == mockData[1] ){
                    props.setPriceRange([0, parsedValue])
                }
                else{
                    props.setPriceRange([props.priceRange[0], parsedValue])
                }
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
        // props.setPriceRange({first_quatile: 0, third_quatile: 0})

    }
  
    const handleOptionChange = (input: number[])=>{
        props.setPriceRange([input[0], input[1]])
        // props.setPriceRange([0, trueMoc[0]])

        props.setPriceOptions({
            from: -1,
            to: -1,
            });
    }
    return(
        <>
            <h1 className="font-semibold">Giá</h1>

            <div className="flex flex-col gap-3">
                <div >
                    <span 
                        className={"border-2 rounded-full px-4 py-1 cursor-pointer  " 
                                + (props.priceRange[0] == 0 && props.priceRange[1] == trueMoc[0]
                                    ? 'bg-slate-200'
                                    : 'hover:bg-slate-100')}
                        onClick={()=>{handleOptionChange([0, trueMoc[0]])}}
                    >
                        {'Dưới ' + formatCurrency(trueMoc[0])}

                    </span>
                </div>
                <div>
                    <span 
                        className={"border-2 rounded-full px-4 py-1 cursor-pointer " 
                        + (props.priceRange[0] == trueMoc[0] && props.priceRange[1] == trueMoc[1]
                            ? 'bg-slate-200'
                            : 'hover:bg-slate-100')}
                        onClick={()=>{handleOptionChange([trueMoc[0], trueMoc[1]])}}
                    >
                        {formatCurrency(trueMoc[0]) + ' - ' + formatCurrency(trueMoc[1])}
                    </span>

                </div>
                <div>
                    <span 
                        className={"border-2 rounded-full px-4 py-1 cursor-pointer " 
                        + (props.priceRange[0] == trueMoc[1] && props.priceRange[1] == 0
                            ? 'bg-slate-200'
                            : 'hover:bg-slate-100')}
                        onClick={()=>{handleOptionChange([trueMoc[1], 0])}}
                    >
                       {'Trên ' + formatCurrency(trueMoc[1])}
                    </span>

                </div>
            </div>
            <SecondaryTitle name="Khoảng giá"/>
            
            <div className="flex flex-col gap-2">
                <div>
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
                </div>
                
                <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Giá trị đầu phải nhỏ hơn hoặc bằng giá trị sau</span>
                    <span onClick={()=>props.handleDeleteInputs()} className="cursor-pointer text-blue-400 hover:text-blue-600 ">Xoá</span>
                </div>
                
            </div>


        </>
    )
}