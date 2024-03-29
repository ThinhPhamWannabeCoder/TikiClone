import { useEffect, useState } from "react";
import { thinh_avatar } from "../../assets/images/image";
import ProductListBox from "../../components/Common/ProductListBox";
import SmallFilterNav from "./SmallFilterNav";
import productApi from "../../services/buyer.services";
import ProductBagde from "../../components/Badge/ProductBadge";

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
export default function ProductList(){
    const [productData, setProductData] = useState<product[]|undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [currentPage, setCurentPage] = useState<number>(1)
 
    // Handling end pagination

    useEffect(()=>{
        productApi.getHomeProduct({
            best_seller: "false",
            limit: 30,
            current_page: currentPage,
        })
            .then(res => {
                    
                    console.log(productData)
                    if(currentPage>1){
                        // Append 
                        setProductData((prevData) => [...prevData, ...newProducts]);
                    }
                    else{
                        setProductData(res.data)
                        setLoading(false);
                    }
                })
            .catch(err => console.log(err.message))
    },[currentPage])

    // Place holder for doing lazy loading
    if(isLoading){
        return 'loading'
    }
    return (
        <div className="w-full">
            <div className="col-span-6 z-10 sticky top-0">
                <h1 className="bg-white font-semibold text-lg">Gợi ý ngày hôm nay</h1>
            <SmallFilterNav class="w-full sticky top-2">
                for products
            </SmallFilterNav>
            </div>
            <ProductListBox >
            
                {

                    productData?.map(item=>
                        <ProductBagde key={item.id}
                            product_url={item.primary_image.url} 
                            name={item.name}
                            price={item.price}
                        />
                    )
                }
            </ProductListBox>
            {/* Create component */}
            <div onClick={()=> {setCurentPage(currentPage+1)}}> This is Pagination</div>
        </div>
        
    
    )
}


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