import { useEffect, useState } from "react";
import NavBox from "../../../components/Common/NavBox";
import unidecode from "unidecode"; 
import productApi from "../../../services/buyer.services";
import { useLocation, useNavigate } from "react-router-dom";

interface navItem{
    id: number,
    name: string,
    image: string,
  }
export default function SubCategoryNavFilter(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const navigate = useNavigate();
    // if(!searchParams.get('subcategory_id')){
    //     navigate("/")
    // }
//    GET PRICE
//    GET EVERY THING
    return(
        <NavBox>
            this is SubCategory Filter khong 
        </NavBox>
    )
}