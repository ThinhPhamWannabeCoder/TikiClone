/**
 * product service
 */
interface Product{
    id: number,
    name: string,
    category_name: string,
    category_id: number,
    subcategory_name: string,
    subcategory_id: number,
}
interface result{
    products: Product[],
    total: number,
    currentPage: number,
}
interface allProduct{
    category_id?: number,
    subcategory_id?: number,
    price_range?: string,
    best_seller?: boolean,
    new_product?: boolean,
    sort?: string,
}
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product.product',({strapi})=>({
    getAllProducts: async (options: allProduct) =>{
        // resolver ve luon
        // filter luon
        // Handle here
        // Get chuan product
        // return 1;
        console.log(options)
        return(1)
    },
    getProductById: async () =>{

    }
}));
