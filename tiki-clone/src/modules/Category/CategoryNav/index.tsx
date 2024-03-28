import { useEffect } from "react";
import NavBox from "../../../components/Common/NavBox";
import productApi from "../../../services/buyer.services";

export default function CategoryNav(){
    useEffect(()=>{
        productApi.getSubCategoryNav(2)
    }[])
    return(
       <NavBox>
             this is Nav
       </NavBox>
    )
}