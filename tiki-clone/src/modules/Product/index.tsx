import { useLocation, useNavigate } from "react-router-dom";
import ProductBagde from "../../components/Badge/ProductBadge";
import OrderForm from "../Order/OrderForm";
import ProductDescription from "./Description";
import ProductMainBadge from "./Image/ProductMainBadge";
import { useEffect, useState } from "react";
import productApi from "../../services/buyer.services";

interface ProductProps{
    productId: number
}
interface MainBadge{

}
interface Description{

}
interface OrderForm{
    
}
export default function Product(){
    // Get all those ....
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const navigate = useNavigate();
    const [data, SetData] = useState();
    const [mainBadge, setMainBadge] =useState()
    useEffect(()=>{
        productApi.getProductById(1)
            .then(x=>{console.log(x.data)})
            .catch(err => {console.log(err.message)})

    },[])
    return(
        <>
            <div className="flex gap-6 ">
                    <ProductMainBadge/>
                    <ProductDescription/>
                    <OrderForm/>
                </div>
                <div>
                    {/* <ProductBagde/> */}
            </div>
            {/* <div>this</div> */}
        </>
    )
}