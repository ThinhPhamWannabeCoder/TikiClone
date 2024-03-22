import MainContent from "../../../../components/Common/MainContent";
import ProductList from "../../../../components/Product/Component/ProductList";
import AllBest from "./AllBest";
import HeroSection from "./HeroSection";
import RecommendedList from "./RecommendList";
import SmallNavigation from "./SmallNavigatetion";
import YouMayLike from "./YouMayLike";

export default function MainHomeContent(){
    // Fetch du lieu -> xu ly logic -> condition cac thu
    // Component chi don va cap nhat lai thoi 
    
    return(
        <MainContent >
            <HeroSection/>
            <SmallNavigation/>
            <AllBest/>
            <YouMayLike/>
            <ProductList/>
        </MainContent>
            
    )
}