/**
 * product controller
 */

import { factories } from '@strapi/strapi'

interface allProduct{
    category_id?: number,
    subcategory_id?: number,
    price_range?: string,
    best_seller?: boolean,
    new_product?: boolean,
    sort?: string,
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
        if (price_range) queryParams.price_range = price_range[0];
        if (best_seller) queryParams.best_seller = best_seller[0] === 'true';
        if (new_product) queryParams.new_product = new_product[0] === 'true';
        if (sort) queryParams.sort = sort[0];

        const data = await strapi.service('api::product.product').getAllProducts(queryParams);       
                // sort example: sort=price:asc -> resovle
        //  price_range example: 200-500, 0-50000, -> resolve
        // phai ket hop voi nahu -> best_seller ma khong co categoy hay gi ca thi se phai handle theo kieu khac 
        // Dung server rieng
        // Con phai resolve rieng ra


        // console.log(ctx.request.query);
        // const data  = await strapi.entityService.findMany('api::product.product',{
        //     populate: '*'
        // });
        // const responsePayload = data.map(product => {
        //     return {
        //         id: product.id,
        //         name: product.name,
        //         inventory: product.Inventory,
        //         primary_image: product.primary_image?product.primary_image.url:"",
        //         price: product.price,
        //     }
        // })
        // ctx.body = responsePayload;
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
