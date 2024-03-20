
interface Overview{
    name: string,
    price: number
}
export default function Overview(prop: Overview){
    return(
        <>
            <h1 className=" text-xl">
                {prop.name}
            </h1>
            <p className="text-xl font-bold mt-4">{prop.price.toFixed(3)}</p>
        </>
    )
}