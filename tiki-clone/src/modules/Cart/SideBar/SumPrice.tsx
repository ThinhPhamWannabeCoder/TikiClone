import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";

interface propsType{
    sumProductPrice: number,
}
export default function SumPrice(prop: propsType) {
    let compo = null; // Bắt đầu với giá trị null cho compo
    const [totalPrice, setTotalPrice] = useState<number>(0)
    useEffect(()=>{
        if(prop.sumProductPrice){
            setTotalPrice(prop.sumProductPrice)
        }
        else{
            setTotalPrice(0)
        }
    },[prop.sumProductPrice])
    if (!prop.sumProductPrice || prop.sumProductPrice==0) {
        // Nếu điều kiện không đúng, hiển thị thông báo
        compo = <div className="text-red-600">Vui lòng chọn sản phẩm</div>;
    }
    else{
        compo = 
        (<>
            
            <div className="flex justify-between">
                <span >Giá sản phẩm</span>
                <span className="text-red-600 text-xl">{prop.sumProductPrice.toLocaleString('de-DE')}</span>
                
            </div>
            <div className="flex justify-between border-t-2 border-dashed pt-2 mt-2 border-slate-500">
                <h3>Tổng Tiền</h3>
                <span className="text-red-600 text-xl">{totalPrice.toLocaleString('de-DE')}</span>
            </div>
        </>)
    }

    return (
        <ContentBox>
            
            {compo}
            
        </ContentBox>
    );
}
