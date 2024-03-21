import { Link, useParams } from "react-router-dom"

export default function SubCategory(){
    console.log('hello')
    const {subcategory} = useParams()
    return(
        <div>
            this is Sub Category 
            {subcategory}
            <div>
                <Link to="/hi/jun/testing">Product</Link>

            </div>
        </div>
    )
}