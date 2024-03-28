import { useEffect, useState } from "react";
import MainContent from "../../components/Common/MainContent";
import CategoryProductList from "./MainContent/CategoryProductList";
import SubCategoryAllBest from "./MainContent/SubCategoryAllBest";
import SubCategoryNav from "./MainContent/SubCategoryNav";
import Title from "./MainContent/Title";
import { useLocation, useNavigate } from 'react-router-dom';
import productApi from "../../services/buyer.services";

interface TitleType{
    id: number,
    name: string
}

export default function CategoryContent(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [title, setTitle]  = useState<TitleType|undefined>(undefined)
    const navigate = useNavigate();

    if(!searchParams.get('category_id')){
        navigate("/")
    }
    useEffect(()=>{
        productApi.getCategory(parseInt(searchParams.get('category_id') as string))
            .then(x => setTitle(x.data))
            .catch(e => console.log(e.message));

    },[])
    if(title === undefined){
        return <div>Please contect Admin for information</div>
    }
    return(
        <MainContent>
            {/* Get tu path variable - */}
            {/* RIENG TITLE LIEN QUA */}
            <Title >
                <h1 className="text-xl font-semibold">{title?.name}</h1>
            </Title>
            {/* Phan nay link khong lien quan */}
            <SubCategoryNav/>
            {/* props cateogry cho all best */}
            {/* LIST REING KHONG LIEN QUAN */}
            <SubCategoryAllBest/>
            {/* Props category cho product category list */}
            {/* TUONG TU */}
            <CategoryProductList/>
        </MainContent>
    )
}