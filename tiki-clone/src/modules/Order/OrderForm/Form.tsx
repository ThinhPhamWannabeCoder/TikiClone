interface FormProps{

    addToCart: ()=>void ,
    immediateBuyHandler: ()=>void
}
export default function Form(){
    const buttonHandler = (e)=>{
        console.log('heee')
    }
    return(
        <div className="flex flex-col gap-2">
            <button 
                className="bg-red-500 w-full text-white py-2 rounded-md"
                onClick={buttonHandler}
            >
                Mua ngay
            </button>
            <button
                className="bg-solid border-2 border-blue-600 py-2 rounded-md bg-white text-blue-600"
                onClick={buttonHandler}
            >
                Thêm vào giỏ
            </button>
            <button 
                className="bg-solid border-2 border-blue-600  py-2 rounded-md bg-white text-blue-600"
                onClick={buttonHandler}
            >
                Mua Trước trả sau
            </button>
        </div>
    )
}