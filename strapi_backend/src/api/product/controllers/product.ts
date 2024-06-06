/**
 * product controller
 */

import { factories } from '@strapi/strapi'

interface allProduct{
    category_id?: number,
    subcategory_id?: number,
    price_range?: string ,
    best_seller?: boolean,
    new_product?: boolean,
    sort?: string,
    limit?: number,
    current_page?: number
}
export default factories.createCoreController('api::product.product',({strapi})=>({
    async getAll(ctx, next){

        const {category_id, subcategory_id, price_range, best_seller,new_product, sort, limit, current_page} = ctx.request.query;
        const queryParams: allProduct = {};

        if (category_id) queryParams.category_id = parseInt(category_id as string);
        if (subcategory_id) queryParams.subcategory_id = parseInt(subcategory_id as string);
        if (price_range) queryParams.price_range = price_range as string;
        if (best_seller) queryParams.best_seller = best_seller as string === "true" ;
        if (new_product) queryParams.new_product = new_product as string === "true" ;
        if (sort) queryParams.sort = sort as string;
        if (limit) queryParams.limit = parseInt(limit as string);
        if (current_page) queryParams.current_page = parseInt(current_page as string);
        if(category_id){
            // if(best_seller){
                ctx.body = await strapi.service('api::product.product').getAllCategory({
                    category_id: queryParams.category_id,
                    best_seller: queryParams.best_seller,
                    price_range: queryParams.price_range,
                    current_page: queryParams.current_page,
                    limit: queryParams.limit,
                    new_product: queryParams.new_product,
                    sort: queryParams.sort,

                }); 
            // }
            // else{
            //     ctx.body = await strapi.service('api::product.product').getBestByCategory({
            //         category_id: queryParams.category_id,
            //         limit: queryParams.limit,
            //         current_page: queryParams.current_page,
            //     })
            // }
        }
        else if(subcategory_id){
            if(best_seller){

                ctx.body =  await strapi.service('api::product.product').getAllSubCategory({
                    subcategory_id: queryParams.subcategory_id, 
                    best_seller: queryParams.best_seller, 
                    price_range: queryParams.price_range,
                    limit: queryParams.limit, 
                    current_page: queryParams.current_page,
                    new_product: queryParams.new_product,
                    sort: queryParams.sort,
                })
            }
            else{
                ctx.body = await strapi.service('api::product.product').getBestBySubCategory({
                    subcategory_id: queryParams.subcategory_id, 
                    limit: queryParams.limit, 
                    current_page: queryParams.current_page,
                })
            }
                
        }
        else{
            ctx.body= await strapi.service('api::product.product').getAllHome({
                best_seller: queryParams.best_seller,
                limit: queryParams.limit,
                current_page: queryParams.current_page
            })
        }
        // const result = await strapi.service('api::product.product').getAllSubCategory({ subcategory_id: queryParams.subcategory_id, best_seller: queryParams.best_seller, price_range: queryParams.price_range,limit: queryParams.limit, current_page: queryParams.current_page, new_product: queryParams.new_product, sort: queryParams.sort});
        // const result= await strapi.service('api::product.product').getBestBySubCategory({subcategory_id: queryParams.subcategory_id, limit: queryParams.limit, current_page: queryParams.current_page})
    },

    async getProductById(ctx, next){
        const {id} = ctx.params;
        const result = await strapi.service('api::product.product').getProductById(parseInt(id));
        return result
    }
}));
