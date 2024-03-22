import HomeNav from "../modules/Product/Home/HomeNav";
import MainHomeContent from "../modules/Product/Home/MainContent";

export default function HomePage(){
    // Fetch upto 30-50 products 
    return(
        <>
           <div className="flex w-11/12 mt-3 gap-4">
               <HomeNav/>
               <MainHomeContent/>
           </div>

        </>
    )
}