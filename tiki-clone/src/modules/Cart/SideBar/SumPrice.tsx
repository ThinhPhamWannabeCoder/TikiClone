import ContentBox from "../../../components/Common/ContentBox";

interface propsType{
    sumProductPrice: number,
    deliveryPrice: number
}
export default function SumPrice(prop: {sumPrice: number}) {
    let compo = null; // Bắt đầu với giá trị null cho compo
    if (!prop.sumPrice) {
        // Nếu điều kiện không đúng, hiển thị thông báo
        compo = <div className="text-red-600">Vui lòng chọn sản phẩm</div>;
    }
    else{
        compo = 
        (<>
            <div className="flex justify-between">
                <span >Phí vận chuyển</span>
                <span className="text-red-600 text-xl">200</span>
            </div>
            <div className="flex justify-between">
                <span >Giá sản phẩm</span>
                <span className="text-red-600 text-xl">{prop.sumPrice}</span>
                
            </div>
        </>)
    }

    return (
        <ContentBox>
            
            {compo}
            <div className="flex justify-between border-t-2 border-dashed pt-2 mt-2 border-slate-500">
                <h3>Tổng Tiền</h3>
                <span className="text-red-600 text-xl">{prop.sumPrice + 200}</span>
            </div>
        </ContentBox>
    );
}
