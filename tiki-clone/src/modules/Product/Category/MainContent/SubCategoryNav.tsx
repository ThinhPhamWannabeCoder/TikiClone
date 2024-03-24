import { thinh_avatar } from "../../../../assets/images/image";
import ProductListBox from "../../../../components/Common/ProductListBox";

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

export default function SubCategoryNav(){
    return(
        <ProductListBox>
            <h1 className="col-span-6 text-xl font-semibold pb-3">Danh mục nổi bật</h1>
            {
                data.map((x,index)=>(
                    <div key={index} className="flex flex-col items-center hover:opacity-60 transition duration-150">
                        <img src={x.url} alt="" className="w-40 h-40 object-cover rounded-full "/>
                        <h3>{x.title}</h3>
                    </div>
                ))
            }
        </ProductListBox>
    )
}