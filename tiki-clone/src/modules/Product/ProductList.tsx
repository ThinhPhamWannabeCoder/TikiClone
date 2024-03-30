import { useEffect, useState } from "react";
import { thinh_avatar } from "../../assets/images/image";
import ProductListBox from "../../components/Common/ProductListBox";
import SmallFilterNav from "./SmallFilterNav";
import productApi from "../../services/buyer.services";
import ProductBagde from "../../components/Badge/ProductBadge";
import SecondaryTitle from "../../components/Title/SecondaryTitle";
import ProductListPagination from "../../components/Pagination/ProductListPagination";
import ContentBox from "../../components/Common/ContentBox";
import HomeProductListFilter from "../../components/Badge/HomeProductListFIlter";

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
    const [bestSeller, setBestSeller] = useState<"true"|"false">("false")
    // Handling end pagination
    const handleNext = () => {
        setCurentPage(currentPage+1)
    }
    const handleBestSeller=()=>{
        setBestSeller("true");
    }  
    const handleAll=()=>{
        setBestSeller("false")
    }
    useEffect(()=>{
        // console.log(bestSeller)
        productApi.getHomeProduct({
            best_seller: bestSeller,
            limit: 6,
            current_page: currentPage,
        })
            .then(res => {
                    if(currentPage>1){
                        // Append 
                        setProductData((prevData) => [...prevData, ...res.data]);
                    }
                    else{
                        setProductData(res.data)
                        setLoading(false);
                    }
                })
            .catch(err => console.log(err.message))
    },[currentPage,bestSeller])

    // Place holder for doing lazy loading
    if(isLoading){
        return 'loading'
    }
    return (
        // <ContentBox class="w-full">
        <div className="flex flex-col gap-3">
            <ContentBox class="col-span-6 z-10 sticky top-0 flex flex-col gap-2">
                <SecondaryTitle name="Gợi ý ngày hôm nay"/>
                <HomeProductListFilter best={handleBestSeller} all={handleAll} state={bestSeller}/>
            </ContentBox>
            <ContentBox>
                <ProductListBox >
                    {
                        // console.log(productData)
                        productData?.map(item=>
                            <ProductBagde key={item.id}
                                product_url={item.primary_image.url} 
                                name={item.name}
                                price={item.price}
                            />
                        )
                    }
                </ProductListBox>
            </ContentBox>
            
            <ProductListPagination next={handleNext}/>
    {/* </ContentBox> */}
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