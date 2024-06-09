import { useEffect, useState } from "react";
import ContentBox from "../../../components/Common/ContentBox";
import productApi from "../../../services/buyer.services";
import { CategoryNav } from "../../../types/home.types";
import { useNavigate } from "react-router-dom";
import { convertToSlug } from "../../../utils/common";
const ASSET_API = import.meta.env.VITE_ASSETS_URL;


export default function SubCategoryNav(props: {categoryId: number}){
    const[subCategory, setSubCategory] = useState<CategoryNav[]>([])
    const navigate = useNavigate();

    //CATEGORY
    useEffect(()=>{
        // console.log("Subcategory nav here")
        productApi.getSubCategoryNav(props.categoryId)
            .then( res =>  {setSubCategory(res.data.data)})
            .catch(err => console.log(err.message))

    },[])
    const handleNavigation = (item) => {
        const path = `/${convertToSlug(item.name)}?category_id=${item.id}`;
        navigate(path);
        window.location.reload()
      };
    if(subCategory.length == 0){
        return ("")
    }
    return(
        <ContentBox class="grid grid-cols-6 gap-1">
            <h1 className="col-span-6 text-xl font-semibold pb-3">Danh mục nổi bật</h1>
            {
                subCategory.map(item=>(
                    <div key={item.id} className="flex flex-col items-center hover:opacity-60 transition duration-150 cursor-pointer" 
                        onClick={()=>{handleNavigation(item)}}
                    >
                        <img src={ASSET_API+item.image.url} alt="" className="w-40 h-40 object-cover rounded-full "/>
                        <h3>{item.name}</h3>
                    </div>
                ))
            }
        </ContentBox>
    )
}