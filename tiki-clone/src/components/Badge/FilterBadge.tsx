interface myProps{
    url: string,
    title: string
}
export default function FilterBadge(props: myProps){
    return(
        <div className="flex flex-col items-center">
            <img src={props.url} alt="" className="w-20 h-20 object-cover"/>
            <h3>{props.title}</h3>
        </div>
    )
}