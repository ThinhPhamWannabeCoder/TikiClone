import ProductListBox from "../../../../components/Common/ProductListBox";
import { thinh_avatar } from "../../../../assets/images/image";
import SmallFilterNav from "../../SmallFilterNav";
import { useEffect, useState } from "react";

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
export default function AllBest(){
    // const [option, setOption] = useState(1);
    // const [count, setCount] = useState(1);
    // useEffect(()=>{
    //     // Call API 
        
    // },[])
    if(!data){
        return 'loading'
    }
    return(
        <ProductListBox >
            <div className="col-span-6">
                <h1 className="font-semibold text-lg">Tiki best</h1>
                <SmallFilterNav class="col-span-6">
                    for best
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
    )
}