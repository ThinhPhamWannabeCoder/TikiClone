interface myProp{
    currentPage: number,
    totalPage: number,
    paginationHandle: (input: number) => void
}
export default function Pagination(props:myProp){

    const pageNumbers = []
    if(props.totalPage === 0){
        return
    }

    for (let i = 1; i <= props.totalPage/10+1; i++) {
        pageNumbers.push(i);
      }
    //   con phai lam them cai active nua -> an cai nao thi them class active cho no
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