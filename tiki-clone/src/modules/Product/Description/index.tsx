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
    productName: string,
    price: number,
    desc: string[],
    detailDesc: string[],
    // toan bo luon
    

}
export default function ProductDescription(){
    return(
        <div className="w-5/12 flex flex-col gap-4 h-full">
            <ContentBox class="">
                <Overview name={data.name} price={data.price}/>
            </ContentBox>

            <ContentBox >
                <DeliveryOverview/>
            </ContentBox>

            <ContentBox>
                <div>Sản phẩm tương tự</div>
                <p>Fetch dữ liệu theo SubCategory - theo mới nhất hoặc ranking</p>
            </ContentBox>

            <ContentBox>
                <div>Tiki Best</div>
                <p>Fetch dữ liệu theo SubCategory - theo tỉ lệ ranking và số lượng</p>
            </ContentBox>

            <ContentBox>
                <Detail/>
            </ContentBox>
            
            <ContentBox >
                <Description/>
            </ContentBox>
        </div>
    )
}