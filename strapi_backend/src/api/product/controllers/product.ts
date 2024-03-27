/**
 * product controller
 */

import { factories } from '@strapi/strapi'

interface allProduct{
    category_id?: number,
    subcategory_id?: number,
    price_range?: string | string[],
    best_seller?: boolean,
    new_product?: boolean,
    sort?: string | string[],
}
export default factories.createCoreController('api::product.product',({strapi})=>({
    async getAll(ctx, next){
        // Phai
        // All will be string -> convert to id
        const {category_id, subcategory_id, price_range, best_seller,new_product, sort} = ctx.request.query;
        const queryParams: allProduct = {};

// Check if query parameter exists before assigning it to interface property
        if (category_id) queryParams.category_id = parseInt(category_id[0]);
        if (subcategory_id) queryParams.subcategory_id = parseInt(subcategory_id[0]);
        if (price_range) queryParams.price_range = price_range;
        if (best_seller) queryParams.best_seller = best_seller === "true";
        if (new_product) queryParams.new_product = new_product === "true";
        if (sort) queryParams.sort = sort;

        const data = await strapi.service('api::product.product').getAll(queryParams);       
        
        ctx.body = data;
    },
    async bestSeller(ctx, next){
        // Lam sao de lay va handle tung du lieu trong nay
        // Khong handle tai day
        // if else va dua ket qua vao trong  ham de xu ly
        ctx.body = await strapi.entityService.findMany('api::product.product',{
            limit: 5,
            fields: ['id', 'name']
        })

    }
}));
