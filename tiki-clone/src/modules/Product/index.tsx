import ProductBagde from "../../components/Badge/ProductBadge";
import OrderForm from "../Order/OrderForm";
import ProductDescription from "./Description";
import ProductMainBadge from "./Image/ProductMainBadge";

export default function Product(){
    return(
        <>
        <div className="flex gap-6 ">
                <ProductMainBadge/>
                <ProductDescription/>
                <OrderForm/>
            </div>
            <div>
                <ProductBagde/>
        </div></>
    )
}