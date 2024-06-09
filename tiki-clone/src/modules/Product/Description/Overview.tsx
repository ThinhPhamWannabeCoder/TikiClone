import ContentBox from "../../../components/Common/ContentBox"
import { formatCurrency } from "../../../utils/common"

interface Overview{
    name: string,
    price: number
}
export default function Overview(prop: Overview){
    return(
        <ContentBox class="">
            <h1 className=" text-xl">
                {prop.name}
            </h1>
            <p className="text-xl font-bold mt-4">{formatCurrency(prop.price)} đ</p>
        </ContentBox>
    )
}