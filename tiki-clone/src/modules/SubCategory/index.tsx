
import SubCategoryMainContent from "./MainContent";
import SubCategoryNavFilter from "./SubCategoryNav";

export default function SubCategory(){
    // Co nen fetch o day khong ta vi day la module ma -> Chac la khong dau kheo day la page luon y chu de xem nhe
    return(
        <>
            <SubCategoryNavFilter/>
            <SubCategoryMainContent/>
        </>
    )
}