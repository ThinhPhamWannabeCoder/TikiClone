import productApi from "../../services/buyer.services"

export default function Test(){
    return(
        <button onClick={()=> {
            productApi.getCategoryBestProductBySubCategory({subcategory_id:9,limit:50,current_page:1})
                .then(x => console.log(x))
                .catch(err => console.log(err.message))
        }} className=" p-5 bg-green-500">
            An tai day de lam viec
        </button>
    )
}