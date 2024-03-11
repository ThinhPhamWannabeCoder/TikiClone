import {thinh_avatar} from '../../../assets/images/image'

export default function ImageInput(){
    return(
        <div className='flex-shrink-0'>
            <img src={thinh_avatar} alt="" className="border-solid border-blue-500 border-4 object-cover w-24 h-24 rounded-full flex-shrink-0"/>

        </div>
    )
}