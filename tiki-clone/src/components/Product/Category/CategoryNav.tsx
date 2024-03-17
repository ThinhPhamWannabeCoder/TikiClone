import { Link } from "react-router-dom"
import NavBox from "../../nav/NavBox"

const categories = [
    {
        id: 1,
        title: 'Nhà Sách Tiki',
        url: '/'
    },
    {
        id: 2,
        title: 'Nhà Cửa - Đời Sống',
        url: '/'
    },
    {
        id: 3,
        title: 'Điện Thoại - Máy Tính Bảng',
        url: '/'
    },
    {
        id: 4,
        title: 'Đồ Chơi - Mẹ & Bé',
        url: '/'
    },
    {
        id: 5,
        title: 'Thiết bị số - Phụ Kiện Số',
        url: '/'
    },
    {
        id: 6,
        title: 'Điện gia dụng',
        url: '/'
    },
    {
        id: 7,
        title: 'Làm Đẹp - Sức Khoẻ',
        url: '/'
    },
]



export default function CategoryNav(){
    return(
        <>
            <NavBox>
                <div className="flex flex-col">
                    <h1 className="font-semibold px-3"
                    
                    >Danh mục</h1>
                    {
                        categories.map(category=>(
                            <Link key={category.id} to={`/${category.title}`}
                                className="py-2  hover:bg-gray-200 rounded-xl px-3 transition duration-200"
                            >
                                {category.title}
                            </Link>
                        ))
                    }
                </div> 
            </NavBox>
             
        </>
    )
}