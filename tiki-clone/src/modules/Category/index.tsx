import { useEffect } from "react";
import MainContent from "../../components/Common/MainContent";
import CategoryProductList from "./MainContent/CategoryProductList";
import SubCategoryAllBest from "./MainContent/SubCategoryAllBest";
import SubCategoryNav from "./MainContent/SubCategoryNav";
import Title from "./MainContent/Title";
import { useLocation } from 'react-router-dom';

export default function CategoryContent(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // Fetch va xu ly logic tai day
    // Chi lien quan den Fetch va link 
    // Rat la complex, can phai danh thoi gian de xe ly no
    // Khon can dung Redux
    // Khong co dung location tai day
    // GET NAME GET CAC THU, GET PRODUCT
    
    // CONSTRUCT TIEP LAI API
    useEffect(()=>{
        // Fetch Hero Sectionh
        // Fetch Small Navigation
        // Fetch All Best Product
        // Fetch you may like
        console.log(searchParams.get('category_id'));
        // 
    },[])
    return(
        <MainContent>
            {/* Get tu path variable - */}
            <Title >
                <h1 className="text-xl font-semibold">"TEST"</h1>
            </Title>
            <SubCategoryNav/>
            {/* props cateogry cho all best */}
            <SubCategoryAllBest/>
            {/* Props category cho product category list */}
            
            <CategoryProductList/>
        </MainContent>
    )
}