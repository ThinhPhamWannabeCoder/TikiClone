import ContentBox from "../../../components/Common/ContentBox";
import { PastOrderItemType } from "../../../types/user.types";
import PastOrderItem from "./PastOrderItem";

interface propType{
    orderItem: PastOrderItemType[]
}
export default function MainContent (props: propType){
    // console.log(props.orderItem)
    return (
        <>
            {/* This is notification */}
           
            {props.orderItem.map(item=>{
                return (
                    <PastOrderItem key={item.id} item={item}/>

                )
            })}
        </>
    )
}