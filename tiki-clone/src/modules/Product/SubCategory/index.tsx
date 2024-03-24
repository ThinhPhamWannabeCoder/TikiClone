import MainContent from "../../../components/Common/MainContent";
import ProductList from "../../../components/Product/Component/ProductList";
import Title from "../Category/MainContent/Title";

export default function SubCategoryContent(){
    return(
        <MainContent>
            <Title >
                <h1 className="text-xl font-semibold">Tên cua no</h1>
            </Title>

            <ProductList/>
        </MainContent>
    )
}