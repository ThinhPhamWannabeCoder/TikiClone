interface props{
    name: string
}
export default function PrimaryTitle(data: props){
    return(
        <h1 className="font-semibold text-xl">{data.name}</h1>

    )
}