import { useParams } from "react-router-dom"

export default function SubCategory(){
    const {subCategory} = useParams()
    console.log(subCategory)
    return(
        <div>This is subCategory</div>
    )
}