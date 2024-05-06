import { useLocation, useNavigate, useParams } from "react-router-dom";
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
    name: string,
    price: number,
    detail:{
        title: string,
        desc: string
    }[],
    desc:  {
        title: string,
        desc: string[]
    }[]
}
interface productShape{
    weight: {
        amount: number,
        unit: string,
        gramConversion: number,
    },
    depth:{
        amount: number,
        unit: string,
        cmConversion: number,
    },
    length:{
        amount: number,
        unit: string,
        cmConversion: number,
    },
    width:{
        amount: number,
        unit: string,
        cmConversion: number,
    }
}
interface Order{
    
        // product_id: number
        // price: number,
        // store_id: number
    store:{
        id: number,
        name: string
    },
    product:{
        id: number,
        name: string,
        price: number,
        primaryImage: string,
    },
    // quantity: number,
}
export default function Product(){
    // Get all those ....
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const searchParams = new URLSearchParams(location.search);
    const {productId} = useParams()
    
    const [mainBadge, setMainBadge] =useState<MainBadge|undefined>(undefined)
    const [description, setDescription]=useState<Description|undefined>(undefined)
    const [lastBadge, setLastBadge] = useState<Order|undefined>(undefined)
  
    useEffect(()=>{
        productApi.getProductById(productId)
            .then(x=>{
                setMainBadge(
                    {
                        productImages: x.data.product_images,
                        OutstandingDesc: x.data.desc.outstanding
                    }
                )
                setDescription({
                    name: x.data.name,
                    price: x.data.price,
                    detail: x.data.desc.detail,
                    desc: x.data.desc.desc
                })
                setLastBadge({
                    // product_id: x.data.id,
                    // price: x.data.price,
                    // store_id: x.data.store_id
                    store:{
                        id: x.data.store.id,
                        name: x.data.store.name,
                    },
                    product:{
                        id: x.data.id,
                        name: x.data.name,
                        price: x.data.price,
                        primaryImage: x.data.product_images[0],
                    },
                    // quantity: 1
                })
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
                    <ProductDescription {...description as Description}/>
                    <OrderForm {...lastBadge as Order}/>
                </div>
                <div>
                    {/* <ProductBagde/> */}
            </div>
            {/* <div>this</div> */}
        </>
    )
}