import ContentBox from "../../../../components/Common/ContentBox"
import { thinh_avatar } from "../../../../assets/images/image"
export default function HeroSection(){
    return(
        <ContentBox class="w-full ">
            <div className="w-full flex gap-4">
                <img src={thinh_avatar} alt="" className="flex-1 object-cover h-80 rounded-xl"/>
                <img src={thinh_avatar} alt="" className="flex-1 object-cover h-80 rounded-xl"/>
            </div>
           <div className="flex justify-center">
             this is pagination 
           </div>
        </ContentBox>
            
        // image swipping
        // flex -
    )
}