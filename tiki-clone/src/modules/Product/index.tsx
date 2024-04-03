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
    productImages: string[],
    OutstandingDesc: string[],
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
    
    const [mainBadge, setMainBadge] =useState<MainBadge|undefined>(undefined)
    useEffect(()=>{
        productApi.getProductById(1)
            .then(x=>{
                // console.log(x.data)
                setMainBadge(
                    {
                        productImages: x.data.product_images,
                        OutstandingDesc: x.data.detailDesc.test
                    }
                )
            })
            .catch(err => {
                // Axios Error
                console.log(err.message)
            })

    },[])
    if(!mainBadge){
        return("Loading")
    }
    return(
        <>
            <div className="flex gap-6 ">
                    <ProductMainBadge {...mainBadge}/>
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