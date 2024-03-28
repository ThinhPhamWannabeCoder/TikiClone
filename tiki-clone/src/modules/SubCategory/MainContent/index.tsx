import { useEffect, useState } from "react";
import MainContent from "../../../components/Common/MainContent";
import Title from "../../Category/MainContent/Title";
import SubCategoryProductList from "./SubCategoryProductList";
import productApi from "../../../services/buyer.services";
import { useLocation, useNavigate } from "react-router-dom";

interface TitleType{
    id: number,
    name: string
}
export default function SubCategoryMainContent(){
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const [title, setTitle]  = useState<TitleType|undefined>(undefined)
    if(!searchParams.get('subcategory_id')){
        navigate("/")
    }
    useEffect(()=>{
        productApi.getSubCategory(parseInt(searchParams.get('subcategory_id') as string))
        .then(x => setTitle(x.data))
            .catch(e => console.log(e.message));

    },[])
    return(
        <MainContent>
            <Title >
                <h1 className="text-xl font-semibold">{title?.name}</h1>
            </Title>
            {/* Pass props to fetch data  */}
            <SubCategoryProductList/>
        </MainContent>
    )
}