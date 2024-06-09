import { useEffect, useState } from "react";
import { thinh_avatar } from "../../../assets/images/image";
import ContentBox from "../../../components/Common/ContentBox";
import ProductListBox from "../../../components/Common/ProductListBox";
import productApi from "../../../services/buyer.services";
import { CategoryNav } from "../../../types/home.types";
const ASSET_API = import.meta.env.VITE_ASSETS_URL;

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
]

export default function SubCategoryNav(props: {categoryId: number}){
    const[subCategory, setSubCategory] = useState<CategoryNav[]>([])
    //CATEGORY
    useEffect(()=>{
        // console.log("Subcategory nav here")
        productApi.getSubCategoryNav(props.categoryId)
            .then( res =>  {setSubCategory(res.data.data)})
            .catch(err => console.log(err.message))

    },[])
    if(subCategory.length == 0){
        return ("")
    }
    return(
        <ContentBox class="grid grid-cols-6 gap-1">
            <h1 className="col-span-6 text-xl font-semibold pb-3">Danh mục nổi bật</h1>
            {
                subCategory.map((x,index)=>(
                    <div key={index} className="flex flex-col items-center hover:opacity-60 transition duration-150">
                        <img src={ASSET_API+x.image.url} alt="" className="w-40 h-40 object-cover rounded-full "/>
                        <h3>{x.name}</h3>
                    </div>
                ))
            }
        </ContentBox>
    )
}