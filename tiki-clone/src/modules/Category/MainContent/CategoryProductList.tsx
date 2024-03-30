import { useEffect, useState } from "react";
import { thinh_avatar } from "../../../assets/images/image";
import ProductListBox from "../../../components/Common/ProductListBox";
import SmallFilterNav from "../../Product/SmallFilterNav";
import productApi from "../../../services/buyer.services";

const data = [
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    {
        url: thinh_avatar,
        title: 'option'
    },
    

]
interface product{
    id: number,
    price: number,
    Inventory: number,
    name: string,
    product_sub_category: {
        id: number,
        name: number,
        product_category:{
            id: number,
            name: number
        }
    }
    primary_image: {
        id: number,
        url: string,
    }
}
interface propType{
    category_id: number,

}
export default function CategoryProductList(prop: propType){
    const [productData, setProductData] = useState<product[]|undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [currentPage, setCurentPage] = useState<number>(1)
    const [bestSeller, setBestSeller] = useState<"true"|"false">("false")
    const handleNext = () => {
        setCurentPage(currentPage+1)
    }
    const handleBestSeller=()=>{
        setBestSeller("true");
    }  
    const handleAll=()=>{
        setBestSeller("false")
    }
    // useEffect(()=>{
    //     console.log(prop.category_id)
    //     productApi.getCategoryProduct({
    //         best_seller: bestSeller,
    //         limit: 6,
    //         current_page: currentPage
    //     })

    },[])
    return (
        <div className="w-full">
            <ProductListBox >
                <div className="col-span-6 z-10 sticky top-0">
                    <h1 className="bg-white font-semibold text-lg">Gợi ý ngày hôm nay</h1>
                    <SmallFilterNav class="w-full sticky top-2">
                    for products
                </SmallFilterNav>
                </div>
                
                {
                    data.map((x,index)=>(
                        <div key={index} className="flex flex-col items-center hover:opacity-60 transition duration-150">
                            <img src={x.url} alt="" className="w-40 h-50 object-cover rounded-xl "/>
                            <h3>{x.title}</h3>
                        </div>
                    ))
                }
            </ProductListBox>
            <div> This is Pagination</div>
        </div>
        
    
    )
}