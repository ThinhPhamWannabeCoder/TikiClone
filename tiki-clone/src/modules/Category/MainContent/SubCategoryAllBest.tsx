import { useEffect, useState } from "react";
import { thinh_avatar } from "../../../assets/images/image";
import ProductListBox from "../../../components/Common/ProductListBox";
import productApi from "../../../services/buyer.services";
import ContentBox from "../../../components/Common/ContentBox";
import SecondaryTitle from "../../../components/Title/SecondaryTitle";
import SmallFilterNav from "../../Product/SmallFilterNav";
import FilterBadge from "../../../components/Badge/FilterBadge";
import ProductBagde from "../../../components/Badge/ProductBadge";
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
interface props{
    category_id: number,
}
interface filterItem{
    id: number,
    name: string,
    image: string,
  }
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
export default function SubCategoryAllBest(data:props){
    const [filterData, setFilterData] = useState<filterItem[]|undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [curSubCategoryId, setCurSubCategoryId] = useState<number|undefined>(undefined)
    const [productData, setProducData] = useState<product[]|undefined>(undefined)
    console.log(data.category_id)
    useEffect(()=>{
        productApi.getSubCategory(data.category_id)
            .then(res => {
                console.log(res.data);

                if(res.data.length>0){
                    setFilterData(res.data);
                    setLoading(false);
                    setCurSubCategoryId(res.data[0].id);
                }
            })
            .catch(err => {console.log(err.message)})
    },[data.category_id])
    useEffect(()=>{
        if(curSubCategoryId){
            productApi.getCategoryBestProductBySubCategory({
                subcategory_id: curSubCategoryId as number,
                limit: 6,
                current_page: 1
            }).then(res => {
                if(res.data.length>0){
                    setProducData(res.data)
                }
            }).catch(err => console.log(err.message))
        }
    },[curSubCategoryId])
    if(isLoading){
        return 'loading'
    }
    return(
        <ContentBox class="flex flex-col gap-3">
            <SecondaryTitle name="Tiki best"/>
            <SmallFilterNav class="col-span-6 flex p-0">
            {
                filterData?.map(x=>(
                    <FilterBadge key={x.id} id={x.id} url={x.image} title={x.name} state={curSubCategoryId as number} onClickHanlder={setCurSubCategoryId}/>
                ))
            }
            </SmallFilterNav>
            <ProductListBox >
            {
                    productData?.map(item=>
                        <ProductBagde 
                            key={item.id}
                            product_url={item.primary_image.url} 
                            name={item.name}
                            price={item.price}
                        />
                    )
                }
            </ProductListBox>
        </ContentBox>
    )
}