import { useEffect, useState } from "react";
import NavBox from "../../../components/Common/NavBox";
import productApi from "../../../services/buyer.services";
import { convertToSlug, unidecode } from "../../../utils/common";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavFilter from "../../NavFilter";
interface navItem{
    id: number,
    name: string,
    // image: string,
  }
  interface propsType{
    setPrices: (input:string)=>void,
    setRefresh: (input: boolean) => void,
}
export default function CategoryNav(props: propsType){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    
    const [data, setData] = useState<navItem[]|undefined>([]);
    const [isLoading, setLoading] = useState<boolean>(true)
    
    const [curCategory, setCurCategory] = useState<number>(parseInt(searchParams.get('category_id') as string))

    
    // console.log(convertToSlug(item.name))
    if(!searchParams.get('category_id')){

        navigate("/")
    }

    useEffect(()=>{
        
        productApi.getCategory(parseInt(searchParams.get('category_id') as string))
            .then(res => {
                
                if(res.data.data.length>0){
                    setData(res.data.data.map(item => {
                        return {
                          id: item.id,
                          name: item.name,
                        }
                      }))
                }
 
            })
            .catch(e => console.log(e.message))
    },[])

    const handleNavigation = (item) => {
      const path = `/${convertToSlug(item.name)}?category_id=${item.id}`;
      navigate(path);
      window.location.reload()
    };
    // if(data?.length<=0){
    //     return (
    //         <NavBox class="sticky top-2">
    //             <div>Day se chi la co filter khong thoi </div>
    //         </NavBox>
    //     )
    // }
  
    return(
        <NavBox class="sticky top-2">
          <div className=" flex flex-col max-h-screen overflow-y-scroll no-scrollbar">
            {data?.length>0 ?
              (<h1 className="font-semibold px-3">Danh mục</h1>) : ""
            }
              
                  {data.map((item) => (
                    
                      <div
                        key={item.id}
                        onClick={()=>{handleNavigation(item)}}
                        className="py-2 hover:bg-gray-200 rounded-xl px-3 transition duration-200 flex gap-2"
                        >
                          <p>{item.name}</p>

                      </div>
                  ))} 
                  
          </div>
          <NavFilter
            setPrices={props.setPrices}
            setRefresh={props.setRefresh}
          />

      </NavBox>
    )
}
