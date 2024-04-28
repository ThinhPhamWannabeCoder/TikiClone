
import { PastOrderHeader } from "../../../types/user.types";


interface propType{
    header: PastOrderHeader[],
    selectedItem : number,
    setSelectedItem: (data: number) => void
}
export default function Header( prop: propType){

    return(
        <div className={`bg-white rounded-lg grid grid-cols-6`}>

            {prop.header?.map((item)=>(
                <div 
                    key={item.id}
                    className={`text-nowrap text-center cursor-pointer p-5
                        ${prop.selectedItem == item.id ? 'text-blue-500 border-b-2 border-blue-500' : " text-slate-500"}
                    `}
                    onClick={()=> prop.setSelectedItem(item.id)}
                >
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}
