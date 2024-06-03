import ProductListBox from "../../../../components/Common/ProductListBox";
import { thinh_avatar } from "../../../../assets/images/image";
import SmallFilterNav from "../../SmallFilterNav";
import { useEffect, useState } from "react";
import ContentBox from "../../../../components/Common/ContentBox";
import ProductBagde from "../../../../components/Badge/ProductBadge";
import FilterBadge from "../../../../components/Badge/FilterBadge";
import productApi from "../../../../services/buyer.services";
import SecondaryTitle from "../../../../components/Title/SecondaryTitle";

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

export default function YouMayLike(){
    // const [option, setOption] = useState(1);
    const [filterData, setFilterData] = useState<filterItem[]|undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [curCategoryId, setCurCategoryId] = useState<number|undefined>(undefined)
    const [prouductData, setProducData] = useState<product[]|undefined>(undefined)
    // const [count, setCount] = useState(1);
    useEffect(()=>{
        productApi.getCategoryTopFilter()
            .then(res => {
                // console.log(res.data.data)
                if(res.data.data.length>0){
                    setFilterData(res.data.data);
                    setLoading(false);
                    setCurCategoryId(res.data.data[0].id)
                }
            })
            .catch(err => console.log(err.message))
    },[])
    useEffect(()=>{
        if(curCategoryId){
            setProducData([])
            productApi.getHomeBestProductByCategory({
                category_id: curCategoryId as number,
                limit: 6,
                current_page: 1
            }).then(res => 
                {
                    // console.log(res.data)
                    if(res.data.length>0){
                        
                        setProducData(res.data)
                    }
                    else{
                        console.log('something wrong')
                    }
                })
                .catch(err => console.log(err.message))
        }
        
    },[curCategoryId])
    if(isLoading){
        return (
            <ContentBox class="w-full">
            
                You may like
            </ContentBox>
        )
    }
    return(
        <ContentBox class="flex flex-col gap-3">
            <SecondaryTitle name="Bạn có thể thích"/>
            <SmallFilterNav class="col-span-6 flex p-0">
            {
                filterData?.map(x=>(
                    <FilterBadge key={x.id} id={x.id} url={x.image} title={x.name} state={curCategoryId as number} onClickHanlder={setCurCategoryId}/>
                ))
            }
            </SmallFilterNav>
            <ProductListBox >
            {
                    prouductData?.map(item=>
                        <ProductBagde 
                            key={item.id}
                            id= {item.id}
                            product_url={item.primary_image.url} 
                            name={item.name}
                            price={item.price}
                        />
                    )
                }
            </ProductListBox>
                {/* Pagination here */}
        </ContentBox>
            
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

]