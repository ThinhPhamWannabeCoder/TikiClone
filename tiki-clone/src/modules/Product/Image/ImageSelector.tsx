import { useState } from "react"
import { thinh_avatar, logo } from "../../../assets/images/image"
const images = {
    primaryImage : thinh_avatar,
    other:  [thinh_avatar, logo, thinh_avatar, logo, thinh_avatar, logo]
}


const domain = 'http://localhost:1337'

interface propsType{
    // primaryImage: string,
    // productImages: string[]
    productImages: string[]
    // OutstandingDesc: string[],
}
export default function  ImageSelector(prop:propsType){
    // prop.productImages.unshift(prop.primaryImage);

    console.log(prop)
    // productImages.unshift(primaryImage);

    const [selectedImage, setSelectedImage] = useState(prop.productImages[0]);
    const imageHanlder = (image:any)=>{
        setSelectedImage(image)
    }
    return(
        <>
            {/* <div id ="present" className="border-solid border-2  rounded-xl overflow-hidden">
                <img src={selectedImage} alt="" className=" w-full  aspect-square object-cover h-4/5" />

            </div>
            <div  id ="select" className="w-full h-1/5 flex gap-1 overflow-hidden">
                {
                    images.other.map((image, index)=>(
                        <img key={index} src={image} 
                            onClick={()=>imageHanlder(image)}
                            className="w-1/6 p-1 aspect-square object-cover border-solid hover:border-blue-600 border-2 rounded-lg"></img>
                    ))
                }
            </div> */}
            
            {/* Handle swiper */}
            <div id ="present" className="border-solid border-2  rounded-xl overflow-hidden">
                <img src={`${domain}${selectedImage}`} alt="" className=" w-full  aspect-square object-cover h-4/5" />

            </div>
            <div  id ="select" className="w-full h-1/5 flex gap-1 overflow-hidden">
                {
                    prop.productImages.map((image, index)=>(
                        <img key={index} src={`${domain}${image}`} 
                            onClick={()=>imageHanlder(`${image}`)}
                            className="w-1/6 p-1 aspect-square object-cover border-solid hover:border-blue-600 border-2 rounded-lg"></img>
                    ))
                }
            </div>
        </>
    )
}