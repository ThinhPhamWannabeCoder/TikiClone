import ContentBox from "../../../../components/Common/ContentBox";
import { thinh_avatar } from "../../../../assets/images/image";

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
    {
        url: thinh_avatar,
        title: 'option'
    },
]

export default function SmallNavigation(){
    return(
        <ContentBox class="w-full grid grid-cols-7 gap-4">
            {
                data.map((x,index)=>(
                    <div key={index} className="flex flex-col items-center hover:opacity-60 transition duration-150">
                        <img src={x.url} alt="" className="w-20 h-20 object-cover rounded-xl aspect-square"/>
                        <h3>{x.title}</h3>
                    </div>
                ))
            }
        </ContentBox>
    )
}