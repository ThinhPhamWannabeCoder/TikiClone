import OuterContainer from "../../components/Common/OuterContent";
import CategoryContent from "../../modules/Category";
import CategoryNav from "../../modules/Category/CategoryNav";

export default function CategoryPage(){
    // props
    return(
        <OuterContainer class="flex  gap-4">
            <CategoryNav/>
            <CategoryContent/>
        </OuterContainer>
    )
}