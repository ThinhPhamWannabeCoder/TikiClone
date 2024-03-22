import ProductList from "../../../../components/Product/Component/ProductList";
import HeroSection from "./HeroSection";
import RecommendedList from "./RecommendList";
import SmallNavigation from "./SmallNavigatetion";
import YouMayLike from "./YouMayLike";

export default function MainHomeContent(){
    // Fetch du lieu -> xu ly logic -> condition cac thu
    // Component chi don va cap nhat lai thoi 
    
    return(
        <div>
            <HeroSection/>
            <SmallNavigation/>
            <RecommendedList/>
            <YouMayLike/>
            <ProductList/>
        </div>
    )
}