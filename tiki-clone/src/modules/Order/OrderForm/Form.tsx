import { useParams } from "react-router-dom"

interface FormProps{

    buyNowHandler: ()=>void ,
    addToCartHandler: ()=>void,
    buyFirstPayLayterHandler: ()=>void,
}
export default function Form(props: FormProps){

    return(
        <div className="flex flex-col gap-2">
            <button 
                className="bg-red-500 w-full text-white py-2 rounded-md"
                onClick={props.buyNowHandler}
            >
                Mua ngay
            </button>
            <button
                className="bg-solid border-2 border-blue-600 py-2 rounded-md bg-white text-blue-600"
                onClick={props.addToCartHandler}
            >
                Thêm vào giỏ
            </button>
            <button 
                className="bg-solid border-2 border-blue-600  py-2 rounded-md bg-white text-blue-600"
                onClick={props.buyFirstPayLayterHandler}
            >
                Mua Trước trả sau
            </button>
        </div>
    )
}