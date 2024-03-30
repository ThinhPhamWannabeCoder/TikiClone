interface props{
    best?: () => void,
    all?: () => void,
}
export default function HomeProductListFilter(){
    return(
        <div className="grid grid-cols-6 gap-0">
            {
                fake.map(item=>{
                    return(
                        <div className="h-12 hover:bg-blue-200 flex justify-center items-center">
                            <h3>{item.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
const fake = [
    {
        name: "Dành cho bạn",
        // image: 
    },
    {
        name: "Top Deal bán chạy"
    }
]