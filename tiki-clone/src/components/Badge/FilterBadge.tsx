interface myProps{
    id: number,
    url: string,
    title: string,
    state: number,
    onClickHanlder: (param:number) => void

}
export default function FilterBadge(props: myProps){
    // console.log(props.state)
    // console.log(props.id)
    return(
        <h3 
            onClick={()=>{props.onClickHanlder(props.id)}}
            className=
                {`flex justify-center items-center py-1 px-2 mr-2 border-2 font-semibold   rounded-full text-sm whitespace-nowrap 
                    ${props.id === props.state ? 'text-blue-500 border-blue-500' : 'hover:bg-slate-200'}
                `}>
            {props.title}
        </h3>
    )
}