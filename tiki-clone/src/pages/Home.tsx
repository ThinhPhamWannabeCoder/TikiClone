import OuterContainer from "../components/Common/OuterContent";
import HomeNav from "../modules/Product/Home/HomeNav";
import MainHomeContent from "../modules/Product/Home/MainContent";

export default function HomePage(){
    // Fetch upto 30-50 products 
    return(
        <>
            <OuterContainer class="flex  gap-4 mt-4" >
                <HomeNav/>
                <MainHomeContent/>
            </OuterContainer>
        </>
    )
}