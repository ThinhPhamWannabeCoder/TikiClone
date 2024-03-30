interface prop{
    next?: () => void
}
export default function ProductListPagination(data: prop){
    return(
        <div className="w-full mt-2 mb-5 flex justify-center">
            <button 
                onClick={data.next}
                className="border-2 rounded-md w-60 h-12 border-blue-500 text-blue-500 hover:bg-blue-200" 
            >
                Xem thêm
            </button>
        </div>
    )
}