import ContentBox from "../../../components/Common/ContentBox";

import {  ReactNode } from "react";
import PrimaryTitle from "../../../components/Title/PrimaryTitle";
interface classProps{
    class?: string
    name: string
}
export default function Title(prop: classProps){
    return (
        <ContentBox class={`${prop.class}`}>
            <PrimaryTitle name={prop.name}/>
        </ContentBox>
    )
}