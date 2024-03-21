import { Link, useParams } from "react-router-dom"
const data={
    title: 'iphone'
}
const navigate ={
    category: 'do-gia-dung',
    subcategory: 'noi-com',
    product: 'test'
}

export default function Category(){
    const {category} = useParams()
    return(
        <>
            <div> This is Category page {category}</div>
            <Link to={`${data.title}`}>{data.title}</Link>
            <Link to={`/${navigate.category}/${navigate.subcategory}/${navigate.product}`}>{navigate.product}</Link>
        </>
        
    )
}