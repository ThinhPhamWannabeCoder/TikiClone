import { useEffect, useState } from "react";
import NavBox from "../../../components/Common/NavBox";
import productApi from "../../../services/buyer.services";
import { unidecode } from "../../../utils/common";
import { Link, useLocation, useNavigate } from "react-router-dom";
interface navItem{
    id: number,
    name: string,
    // image: string,
  }
export default function CategoryNav(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    
    const [data, setData] = useState<navItem[]|undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(true)
    
    const convertToSlug = (text:string) => {
        const x =  unidecode(text)
            .toLowerCase() // Convert text to lowercase
            .replace(/ - /g,"-")
            .replace(/[^\w\s-]/g, "") // Remove non-word characters
            .replace(/\s+/g, "-") // Replace spaces with hyphens
            .trim(); // Trim leading and trailing spaces
        return x
      };    
    if(!searchParams.get('category_id')){
        navigate("/")
    }
    useEffect(()=>{
        
        productApi.getSubCategoryNav(parseInt(searchParams.get('category_id') as string))
            .then(x => {
                if(x.data.length){
                    setData(x.data); setLoading(false)
                }
            })
            .catch(e => console.log(e.message))
    },[])

    if(isLoading){
        console.log(isLoading)
        return (
            <NavBox class="sticky top-2">
                <div>Loading</div>
            </NavBox>
        )
    }
    return(
        <NavBox class="sticky top-2">
        <div className=" flex flex-col max-h-screen overflow-y-scroll no-scrollbar">
            <h1 className="font-semibold px-3">Danh mục</h1>
                {data.map((item) => (
                    <Link
                      key={item.id}
                      to={`${convertToSlug(item.name)}?subcategory_id=${item.id}`} // Convert title to slug
                      className="py-2 hover:bg-gray-200 rounded-xl px-3 transition duration-200 flex gap-2"
                      >
                      {/* <div className="flex"> */}
                        {/* <img src={`http://localhost:1337${item.image}`} alt="categry iamge"  className="w-10 h-10"/> */}
                        <p>{item.name}</p>

                      {/* </div> */}
                    </Link>
                ))} 
        </div>
      </NavBox>
    )
}
