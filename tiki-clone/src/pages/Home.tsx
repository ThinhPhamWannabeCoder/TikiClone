import CategoryNav from "../components/Product/Category/CategoryNav";
import MainContent from "../components/Product/MainContent";

export default function HomePage(){
    return(
        <>
            <div className="flex w-10/12 mt-3 gap-4">
                <CategoryNav/>
                <MainContent>
                    This is main content
                </MainContent>
            </div>
            
        </>
    )
}