import CategoryNav from "../components/Product/Category/CategoryNav";
import MainContent from "../components/Product/MainContent";

export default function HomePage(){
    // Fetch upto 30-50 products 
    return(
        <>
            <div className="flex w-11/12 mt-3 gap-4">
                <CategoryNav/>
                <MainContent>
                    This is main content
                    {/* Alot of Product bages */}
                </MainContent>
            </div>
            
        </>
    )
}