import ProductListBox from "../../../../components/Common/ProductListBox";
import { thinh_avatar } from "../../../../assets/images/image";
import SmallFilterNav from "../../Category/MainContent/SmallFilterNav";

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
    return(
        <ProductListBox >
            <div className="col-span-6">
                <h1 className="font-semibold text-lg">Tiki best</h1>
            </div>
            <SmallFilterNav class="col-span-6">
                    for best
            </SmallFilterNav>
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