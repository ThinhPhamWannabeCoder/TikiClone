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
    price_range?: string | string[],
    best_seller?: boolean,
    new_product?: boolean,
    sort?: string | string[],
    limit?: number,
    currentPage?: number
}
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product.product',({strapi})=>({
    getAll: async (options: allProduct) =>{
       //Handle tai day
        // Handle theo tung truong hop
        // 
        return(options)
    },
    getAllHome: async (best_seller, limit, current_page)=>{
        // Phan cuoi

        return 1;
    },
    getAllCategory: async (category_id, best_seller, price_range,limit, current_page) => {

    },
    getBestByCategory: async (category_id, limit, current_page) =>{

    },
    getAllSubCategory: async (subcategory_id, best_seller, price_range,limit, current_page) => {

    },
    getBestBySubCategory: async (subcategory_id, limit, current_page) =>{

    },
    getProductById: async (product_id: number) =>{

    }
}));
