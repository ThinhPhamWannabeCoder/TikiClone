import { PencilIcon } from '@heroicons/react/24/outline'
import {thinh_avatar} from '../../../assets/images/image'
import { useState } from 'react'
const ASSET_API = import.meta.env.VITE_ASSETS_URL

interface myProps{
    url: string
    setUrl: (input: string)=> void,
    setAvatarChange: (input: boolean)  => void
}

export default function ImageInput(props: myProps){
    const [currentAvatar, setCurrentAvatar] = useState(`${ASSET_API}${props.url}`)
    const avatarPreviewHandle = (e)=>{
        props.setAvatarChange(e.target.files[0])
        setCurrentAvatar(URL.createObjectURL(e.target.files[0]))
    }
    return(
        <div className='flex-shrink-0 relative'>
                <img src={currentAvatar} alt="" className="border-solid border-blue-500 border-4 object-cover w-24 h-24 rounded-full flex-shrink-0" />
            <label  
                className='absolute right-0 w-6 h-6 bottom-1 cursor-pointer bg-green-700 flex justify-center items-center rounded-full'
            >
                <PencilIcon className='w-4 h-4'/>
                <input type="file" name="avatar" accept="image/png, image/jpeg"
                    onChange={avatarPreviewHandle}
                    className='hidden'
                />
            </label>
        </div>
        
        
    )
}