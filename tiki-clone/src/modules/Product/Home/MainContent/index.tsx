import { useEffect, useState } from "react";
import MainContent from "../../../../components/Common/MainContent";
import ProductList from "../../ProductList";
import AllBest from "./AllBest";
import HeroSection from "./HeroSection";
import SmallNavigation from "./SmallNavigatetion";
import YouMayLike from "./YouMayLike";
import { useLocation } from "react-router-dom";

export default function MainHomeContent(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // cost categoryId = 
    // Fetch va xu ly logic tai day
    // Chi lien quan den Fetch va link 
    // Rat la complex, can phai danh thoi gian de xe ly no
    // Khon can dung Redux
    // Khong co dung location tai day
    // Fetch p
    useEffect(()=>{
        // Fetch Hero Sectionh
        // Fetch Small Navigation
        // Fetch All Best Product
        // Fetch you may like
        // console.log(searchParams.get('category_id'));
        // 
        
        // 
    },[])
    return(
        <MainContent>
            {/* Link */}
            <HeroSection/>
            {/* Go to the link */}
            <SmallNavigation/>
            {/* Filter in init  */}
            {/* Props: filter + inital product of the first filter */}
            <AllBest/>
            {/* Nhu all best */}
            <YouMayLike/>
            {/* Khong co props */}
            <ProductList/>
        </MainContent>
            
    )
}

const fakeFetchResult ={
    heroResult : [{id: 1, imgUrl:''},{id:2, imgUrl:''}],
    AllBestResult: [{id: 1, title:'',categoryId:1},{id:2, title:'',categoryId:1}],
    YouMayLikeResult: [{id: 1, title:'',subCategoryId:1},{id:2, title:'',subCategoryId:1}],
}