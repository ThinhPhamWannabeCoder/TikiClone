import MainContent from "../../../components/Common/MainContent";
import ProductList from "../../../components/Product/Component/ProductList";
import Product from "../../../pages/Buyer/Product";
import AllBest from "../Home/MainContent/AllBest";
import SubCategoryAllBest from "./MainContent/SubCategoryAllBest";
import SubCategoryNav from "./MainContent/SubCategoryNav";
import Title from "./MainContent/Title";

export default function CategoryContent(){
    return(
        <MainContent>
            <Title >
                <h1 className="text-xl font-semibold">Tên cua no</h1>
            </Title>
            <SubCategoryNav/>
            <SubCategoryAllBest/>
            <ProductList/>
        </MainContent>
    )
}