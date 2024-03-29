interface myProps{
    id: number,
    url: string,
    title: string,
    onClickHanlder: (param:number) => void

}
export default function FilterBadge(props: myProps){
    
    return(
        <h3 
            onClick={()=>{props.onClickHanlder(props.id)}}
            className=
                "flex justify-center items-center py-1 px-2 mr-2 border-2 font-semibold hover:text-blue-500 hover:border-blue-500 hover:bg-blue-200 rounded-full text-sm whitespace-nowrap ">
            {props.title}
        </h3>
    )
}