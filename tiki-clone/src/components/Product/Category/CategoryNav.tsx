import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBox from "../../nav/NavBox";
import unidecode from "unidecode"; // Import unidecode library

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

export default function CategoryNav() {
  const convertToSlug = (text) => {
    return unidecode(text)
      .toLowerCase() // Convert text to lowercase
      .replace(/ - /g,"-")
      .replace(/[^\w\s-]/g, "") // Remove non-word characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .trim(); // Trim leading and trailing spaces
  };
  useEffect(()=>{
    const content = document.querySelector('#content')
    content?.addEventListener("scroll",()=>{
        console.log('hi')
    })
    return ()=>{
        content?.removeEventListener("scroll",()=>{
            console.log('hi')
        })
    }
  },[])

  return (
    <>
      <NavBox>
        <div className=" flex flex-col h-screen overflow-y-scroll no-scrollbar" id = 'content'>
            {/* <div className="  "> */}
                <h1 className="font-semibold px-3">Danh mục</h1>
                {categories.map((category) => (
                    <Link
                    key={category.id}
                    to={`/${convertToSlug(category.title)}`} // Convert title to slug
                    className="py-2 hover:bg-gray-200 rounded-xl px-3 transition duration-200"
                    >
                    {category.title}
                    </Link>
                ))}
            {/* </div> */}
          
        </div>
      </NavBox>
    </>
  );
}
