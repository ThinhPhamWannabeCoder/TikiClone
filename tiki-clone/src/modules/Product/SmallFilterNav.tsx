import {  ReactNode } from "react";
import ContentBox from "../../components/Common/ContentBox";
interface classProps{
    class?: string
    children: ReactNode
}
export default function SmallFilterNav(props: classProps){
    return(
        <ContentBox>
              {props.children}
        </ContentBox>
    )
}