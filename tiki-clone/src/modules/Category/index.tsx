import { useEffect, useState } from "react";
import MainContent from "../../components/Common/MainContent";
import CategoryProductList from "./MainContent/CategoryProductList";
import SubCategoryAllBest from "./MainContent/SubCategoryAllBest";
import SubCategoryNav from "./MainContent/SubCategoryNav";
import Title from "./MainContent/Title";
import { useLocation, useNavigate } from 'react-router-dom';
import productApi from "../../services/buyer.services";



export default function CategoryContent(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [title, setTitle]  = useState<string|undefined>(undefined)
    const navigate = useNavigate();
    const category_id = searchParams.get('category_id')
    if(!category_id){
        navigate("/")
    }
    useEffect(()=>{
        productApi.getCategory(parseInt(category_id as string))
            .then(x => {setTitle(x.data.data.attributes.name); console.log(x.data.data.attributes.name)})
            .catch(e => console.log(e.message));

    },[])
    if(title === undefined){
        return <div>Please contect Admin for information</div>
    }
    return(
        <MainContent>

            <Title name={title}/>
            <SubCategoryNav/>

            <SubCategoryAllBest category_id={parseInt(category_id as string)}/>

            <CategoryProductList category_id={parseInt(category_id as string)}/>
        </MainContent>
    )
}