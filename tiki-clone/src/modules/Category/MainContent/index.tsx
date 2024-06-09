import { useEffect, useState } from "react";
import MainContent from "../../../components/Common/MainContent";
import CategoryProductList from "./CategoryProductList";
import SubCategoryAllBest from "./SubCategoryAllBest";
import SubCategoryNav from "./SubCategoryNav";
import Title from "./Title";
import { useLocation, useNavigate } from 'react-router-dom';
import productApi from "../../../services/buyer.services";
import ProductList from "../../Product/ProductList";

// PASS FILTERING DOWN 

interface propsType{
    refresh: boolean,
    price: string,
    setRefresh: (input: boolean) => void,

}

export default function CategoryContent(props : propsType){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [title, setTitle]  = useState<string>()
    const navigate = useNavigate();
    const category_id = searchParams.get('category_id')
    if(!category_id){
        navigate("/")
    }
    useEffect(()=>{
        productApi.getCategoryById(parseInt(category_id as string))
            .then(res => {
                // console.log
                setTitle(res.data.data.attributes.name); 
                })
            .catch(e => console.log(e.message));

    },[])

    return(
        <MainContent>

            <Title name={title}/>
            <SubCategoryNav categoryId={parseInt(category_id as string)}/>

            {/* <SubCategoryAllBest category_id={parseInt(category_id as string)}/> */}
            {/* USE useMemo for better performance when filtering productList
                not the filter nav
                */}
                <ProductList
                    categoryId={parseInt(category_id as string)}
                    refresh={props.refresh}
                    setRefresh={props.setRefresh}
                    price={props.price}
                />
            {/* <CategoryProductList category_id={parseInt(category_id as string)}/> */}
        </MainContent>
    )
}