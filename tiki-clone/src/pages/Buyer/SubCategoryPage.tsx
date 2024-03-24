import OuterContainer from "../../components/Common/OuterContent";
import CategoryNav from "../../modules/Category/CategoryNav";
import SubCategory from "../../modules/SubCategory";
import SubCategoryContent from "../../modules/SubCategory";

export default function SubCategoryPage(){
    return(
        <OuterContainer class="flex  gap-4">
            <SubCategory/>
        </OuterContainer>
    )
}