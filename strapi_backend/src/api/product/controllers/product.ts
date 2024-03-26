/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product',({strapi})=>({
    async getAll(ctx, next){
        // Phai
        // All will be string -> convert to id
        const {category_id, subcategory_id, price_range, best_seller,new_product, sort} = ctx.request.query;
        // sort example: sort=price:asc -> resovle
        //  price_range example: 200-500, 0-50000, -> resolve
        // phai ket hop voi nahu -> best_seller ma khong co categoy hay gi ca thi se phai handle theo kieu khac 
        // Dung server rieng
        console.log(ctx.request.query);
        const data  = await strapi.entityService.findMany('api::product.product',{
            populate: '*'
        });
        const responsePayload = data.map(product => {
            return {
                id: product.id,
                name: product.name,
                inventory: product.Inventory,
                primary_image: product.primary_image?product.primary_image.url:"",
                price: product.price,
            }
        })
        ctx.body = responsePayload;
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
