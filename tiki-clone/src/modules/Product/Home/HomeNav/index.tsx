import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { unidecode } from "../../../../utils/common";
import NavBox from "../../../../components/Common/NavBox";
import productApi from "../../../../services/buyer.services";

interface navItem{
  id: number,
  name: string,
  image: string,
}
export default function HomeNav(){
    const [data, setData] = useState<navItem[]|undefined>(undefined);
    const convertToSlug = (text:string) => {
        return unidecode(text)
          .toLowerCase() // Convert text to lowercase
          .replace(/ - /g,"-")
          .replace(/[^\w\s-]/g, "") // Remove non-word characters
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .trim(); // Trim leading and trailing spaces
      };
     

    useEffect(()=>{
      // productApi.getCategoryNav()
      //   .then(x => {setData(x.data); setLoading(false)})
      //   .catch(e => console.log(e.message))
      productApi.getCategory()
        .then(res => {
          setData(res.data.data.map(item => {
            return {
              id: item.id,
              name: item.name,
              image: item.image.url
            }
          }))
        })
        .catch(err =>{
          console.log(err.message)
        })
    },[])
    if(!data){
      return (<div>Loading</div>)
    }
    return (
    
        <NavBox class="sticky top-2">
          <div className=" flex flex-col max-h-screen overflow-y-scroll no-scrollbar">
              <h1 className="font-semibold px-3">Danh mục</h1>
                  {data.map((item) => (
                      <Link
                        key={item.id}
                        to={`${convertToSlug(item.name)}?category_id=${item.id}`} // Convert title to slug
                        className="py-2 hover:bg-gray-200 rounded-xl px-3 transition duration-200 flex gap-2 items-center"
                        >
                          <img src={`http://localhost:1337${item.image}`} alt="categry iamge"  className="w-10 h-10"/>
                          <p>{item.name}</p>

                      </Link>
                  ))} 
          </div>
        </NavBox>
    
    )
    
}