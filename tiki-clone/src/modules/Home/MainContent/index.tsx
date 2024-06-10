import MainContent from "../../../components/Common/MainContent";
import ProductList from "../../Product/ProductList";
import AllBest from "./AllBest";
import HeroSection from "./HeroSection";
import YouMayLike from "./YouMayLike";
import { useLocation } from "react-router-dom";

export default function MainHomeContent(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return(
        <MainContent>
            {/* Link */}
            <HeroSection/>

            <AllBest/>
            <YouMayLike/>
            <ProductList/>
        </MainContent>
            
    )
}

// const fakeFetchResult ={
//     heroResult : [{id: 1, imgUrl:''},{id:2, imgUrl:''}],
//     AllBestResult: [{id: 1, title:'',categoryId:1},{id:2, title:'',categoryId:1}],
//     YouMayLikeResult: [{id: 1, title:'',subCategoryId:1},{id:2, title:'',subCategoryId:1}],
// }