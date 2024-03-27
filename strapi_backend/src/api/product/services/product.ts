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
    limit?: number,
    current_page?: number
}
import { factories } from '@strapi/strapi';
//@ts-ignore
export default factories.createCoreService('api::product.product',({strapi})=>({
    getAll: async (options: allProduct) =>{
       //Handle tai day
        // Handle theo tung truong hop
        // 
        return(options)
    },
    getAllHome: async (options: {best_seller: boolean, limit:number, current_page:number})=>{
        // All the variable Have to be avaialble
        // Limit = 10
        // Current-Page = 1
        // Best Seller: true, false
        // Lam sao de lay duoc thong tin 
        if(options.best_seller){
            // console.log(typeof options.best_seller)

            return await strapi.entityService.findMany('api::product.product',{
                fields: ['id', 'name', 'price','Inventory'],
                populate:{
                    product_sub_category: {
                        fields: ['id', 'name'],
                        populate:{
                            product_category:{
                                fields: ['id', 'name']
                            }
                        }
                    },
                    primary_image:{
                        fields: ['id','url']
                    }
                },
                start: (options.current_page - 1)*options.limit,
                limit: options.limit,
                sort: [{price: 'desc'},{Inventory: 'desc'}],
                filters: {
                    price: {
                        $gte: 0
                    },
                    Inventory: {
                        $gte: 0
                    }
                }
            })
        }
        return await strapi.entityService.findMany('api::product.product',{
            fields: ['id', 'name', 'price','Inventory'],
            populate:{
                product_sub_category: {
                    fields: ['id', 'name'],
                    populate:{
                        product_category:{
                            fields: ['id', 'name']
                        }
                    }
                },
                primary_image:{
                    fields: ['id','url']
                }
            },
            start: (options.current_page - 1)*options.limit,
            limit: options.limit,
            // sort: [{price: 'desc'},{Inventory: 'desc'}],
            filters: {
                price: {
                    $gte: 0
                },
                Inventory: {
                    $gt: 0
                }
            }
        })
    },
    getAllCategory: async (category_id, best_seller, price_range,limit, current_page) => {
        // tuong tu va co rat nhieu
    },
    getBestByCategory: async (category_id, limit, current_page) =>{

    },
    getAllSubCategory: async (subcategory_id, best_seller, price_range,limit, current_page) => {

    },
    getBestBySubCategory: async (subcategory_id, limit, current_page) =>{

    },
    getProductById: async (product_id: number) =>{
        // Process all Information -> Later
    }
}));
