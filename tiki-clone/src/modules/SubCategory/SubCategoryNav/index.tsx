import { useEffect, useState } from "react";
import NavBox from "../../../components/Common/NavBox";
import unidecode from "unidecode"; 
import productApi from "../../../services/buyer.services";

interface navItem{
    id: number,
    name: string,
    image: string,
  }
export default function SubCategoryNavFilter(){
//    GET PRICE
//    GET EVERY THING
    return(
        <NavBox>
            this is SubCategory Filter khong 
        </NavBox>
    )
}