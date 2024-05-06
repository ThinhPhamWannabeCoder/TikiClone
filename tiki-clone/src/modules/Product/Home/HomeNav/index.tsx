import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { unidecode } from "../../../../utils/common";
import NavBox from "../../../../components/Common/NavBox";
import productApi from "../../../../services/buyer.services";

const categories = [
  {
    id: 1,
    title: "Nhà Sách Tiki",
    url: "/"
  },
  {
    id: 2,
    title: "Nhà Cửa - Đời Sống",
    url: "/"
  },
  {
    id: 3,
    title: "Điện Thoại - Máy Tính Bảng",
    url: "/"
  },
  {
    id: 4,
    title: "Đồ Chơi - Mẹ & Bé",
    url: "/"
  },
  {
    id: 5,
    title: "Thiết bị số - Phụ Kiện Số",
    url: "/"
  },
  {
    id: 6,
    title: "Điện gia dụng",
    url: "/"
  },
  {
    id: 7,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 8,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 9,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 10,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 11,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 12,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 13,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 14,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 15,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 16,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 17,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 18,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 19,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 20,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 21,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  {
    id: 22,
    title: "Làm Đẹp - Sức Khoẻ",
    url: "/"
  },
  
];
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