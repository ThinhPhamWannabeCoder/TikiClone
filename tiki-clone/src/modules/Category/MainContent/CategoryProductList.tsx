import { useEffect } from "react";
import { thinh_avatar } from "../../../assets/images/image";
import ProductListBox from "../../../components/Common/ProductListBox";
import SmallFilterNav from "../../Product/SmallFilterNav";

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

export default function CategoryProductList(){
    //  Here's the state 
    // 
    useEffect(()=>{
        // productApi.get(filter)
        // pass props to small filter
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