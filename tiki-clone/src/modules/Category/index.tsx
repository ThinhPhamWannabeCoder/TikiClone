import { useEffect } from "react";
import MainContent from "../../components/Common/MainContent";
import CategoryProductList from "./MainContent/CategoryProductList";
import SubCategoryAllBest from "./MainContent/SubCategoryAllBest";
import SubCategoryNav from "./MainContent/SubCategoryNav";
import Title from "./MainContent/Title";
import { useParams } from 'react-router-dom';

export default function CategoryContent(){
    // get id from path variable
    const { category } = useParams();
    useEffect(()=>{
        // Fetch category name - fro
        // Fetch du lieu tu categoy
        // Fetch thong tin navigation
        // 
    },[])
    return(
        <MainContent>
            {/* Get tu path variable - */}
            <Title >
                <h1 className="text-xl font-semibold">{category}</h1>
            </Title>
            <SubCategoryNav/>
            {/* props cateogry cho all best */}
            <SubCategoryAllBest/>
            {/* Props category cho product category list */}
            
            <CategoryProductList/>
        </MainContent>
    )
}