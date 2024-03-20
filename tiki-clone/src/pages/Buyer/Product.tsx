import ProductBagde from "../../components/Product/Badge/ProductBadge";
import OrderForm from "../../modules/Order/OrderForm";
import ProductDescription from "../../modules/Product/Description";
import ProductMainBadge from "../../modules/Product/Image/ProductMainBadge";

export default function Product(){
    return(
        <>
            this is Product Page
        <div className="w-11/12 flex gap-6 ">
            <ProductMainBadge/>
            <ProductDescription/>
            <OrderForm/>
        </div>
        <div>
            <ProductBagde/>
        </div>
        </>
        
    )
}