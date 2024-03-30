interface props{
    name: string
}
export default function SecondaryTitle(data: props){
    return(
        <h1 className="font-semibold text-lg">{data.name}</h1>

    )
}