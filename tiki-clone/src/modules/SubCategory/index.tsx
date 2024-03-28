
import SubCategoryMainContent from "./MainContent";
import SubCategoryNavFilter from "./SubCategoryNav";

export default function SubCategory(){
    // Co nen fetch o day khong ta vi day la module ma -> Chac la khong dau kheo day la page luon y chu de xem nhe
    // Phai fetch tai day u ?
    return(
        <>
            {/* Lam sao de active phan price range co */}
            {/* Tim hieu cach dung query string */}
            <SubCategoryNavFilter/>
            <SubCategoryMainContent/>
        </>
    )
}