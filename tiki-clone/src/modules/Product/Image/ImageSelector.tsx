import { useState } from "react"
import { thinh_avatar, logo } from "../../../assets/images/image"
const images = {
    primaryImage : thinh_avatar,
    other:  [thinh_avatar, logo, thinh_avatar, logo, thinh_avatar, logo]
}

export default function  ImageSelector(){
    const [selectedImage, setSelectedImage] = useState(images.primaryImage);
    const imageHanlder = (image, index)=>{
        setSelectedImage(image)
    }
    return(
        <>
            <div id ="present" className="border-solid border-2  rounded-xl overflow-hidden">
                <img src={selectedImage} alt="" className=" w-full  aspect-square object-cover h-4/5" />

            </div>
            <div  id ="select" className="w-full h-1/5 flex gap-1 overflow-hidden">
                {
                    images.other.map((image, index)=>(
                        <img key={index} src={image} 
                            onClick={()=>imageHanlder(image, index)}
                            className="w-1/6 p-1 aspect-square object-cover border-solid hover:border-blue-600 border-2 rounded-lg"></img>
                    ))
                }
            </div>
        </>
    )
}