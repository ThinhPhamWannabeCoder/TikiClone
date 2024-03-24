import OuterContainer from "../../components/Common/OuterContent";
import CategoryNav from "../../modules/Product/Category/CategoryNav";
import SubCategoryContent from "../../modules/Product/SubCategory";

export default function SubCategoryPage(){
    return(
        <OuterContainer class="flex  gap-4">
            <CategoryNav/>
            <SubCategoryContent/>
        </OuterContainer>
    )
}