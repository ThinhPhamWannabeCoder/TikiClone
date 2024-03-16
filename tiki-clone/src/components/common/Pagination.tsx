interface myProp{
    currentPage: number,
    totalPage: number,
    paginationHandle: (input: number) => void
}
export default function Pagination(props:myProp){
    // Render Url
    // Swtich Active ()
    // If too long -> Logic rendering
    // Render lai ben nay, cho vao center roi tinh tiep
    const pageNumbers = []
    if(props.totalPage === 0){
        return
    }
    // console.log(props.totalPage)

    // Render button
    for (let i = 1; i <= props.totalPage/10+1; i++) {
        pageNumbers.push(i);
      }
    return(
        <div className="w-full rounded-lg p-2">
            
            {
                pageNumbers.map(page=>(
                    <button className="w-10 h-10 font-semibold bg-gray-400 rounded-lg mx-1"
                        key={page} value={page} onClick={() => props.paginationHandle(page)}
                    >
                        {page}
                    </button>
                ))
            }
        </div>
    )
}