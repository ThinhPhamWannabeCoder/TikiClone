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
        // Neu nhu variable khong ung thi tra ve error trong method luon, vi neu de day se rat dai va kho doc
        // Lam the nao de valuate no ok hon 1 chut

        // Phai
        // All will be string -> convert to id
        const {category_id, subcategory_id, price_range, best_seller,new_product, sort, limit, current_page} = ctx.request.query;
        const queryParams: allProduct = {};

// Check if query parameter exists before assigning it to interface property
        if (category_id) queryParams.category_id = parseInt(category_id as string);
        if (subcategory_id) queryParams.subcategory_id = parseInt(subcategory_id as string);
        if (price_range) queryParams.price_range = price_range as string;
        if (best_seller) queryParams.best_seller = best_seller as string === "true" ;
        if (new_product) queryParams.new_product = new_product as string === "true" ;
        if (sort) queryParams.sort = sort as string;
        if (limit) queryParams.limit = parseInt(limit as string);
        if (current_page) queryParams.current_page = parseInt(current_page as string);
        //const data = await strapi.service('api::product.product').getAll(queryParams);   
            
        // if()
        const result = await strapi.service('api::product.product').getAllHome({best_seller: queryParams.best_seller, limit: queryParams.limit, current_page: queryParams.current_page});
        // const result = await strapi.service('api::product.product').getAllSubCategory({ subcategory_id: queryParams.subcategory_id, best_seller: queryParams.best_seller, price_range: queryParams.price_range,limit: queryParams.limit, current_page: queryParams.current_page, new_product: queryParams.new_product, sort: queryParams.sort});
        // const result= await strapi.service('api::product.product').getBestBySubCategory({subcategory_id: queryParams.subcategory_id, limit: queryParams.limit, current_page: queryParams.current_page})
        ctx.body = result;
    },
    async bestSeller(ctx, next){
        // Lam sao de lay va handle tung du lieu trong nay
        // Khong handle tai day
        // if else va dua ket qua vao trong  ham de xu ly
        ctx.body = await strapi.entityService.findMany('api::product.product',{
            limit: 5,
            fields: ['id', 'name']
        })
    },
    async getProductById(ctx, next){
        const {id} = ctx.params;
        const result = await strapi.service('api::product.product').getProductById(parseInt(id));
        return result
    }
}));
