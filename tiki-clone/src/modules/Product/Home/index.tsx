import HomeNav from "./HomeNav";
import MainHomeContent from "./MainContent";

export default function Home(){
    // Process here
    //
    return(
        <>
            {/* Home Nav only for naviatting to next page -> no need to reredner */}
            <HomeNav/>
            <MainHomeContent/>
        </>
                
       
    )
}