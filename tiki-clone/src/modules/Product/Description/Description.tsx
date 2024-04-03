import ContentBox from "../../../components/Common/ContentBox"

interface Description{
    title: string,
    desc: string[]
}
export default function Description( prop: {data: Description[]}){
    // console.log(prop.data)
    return(
        <ContentBox >
            <h1 className="text-xl font-bold pb-3">Mô tả sản phẩm</h1>
            {prop.data.map(des=>(
                <div className="py-2">
                    <h2 className="text-lg py-2 font-semibold">{des.title}</h2>
                    <ul className="pl-4">
                        {
                            des.desc.map((detail, index) => (
                                
                                <li key={index}
                                    className="list-disc"
                                >
                                    {detail}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))}
            {/* <p>
                {data.message}
            </p> */}
        </ContentBox>
            
    )
}