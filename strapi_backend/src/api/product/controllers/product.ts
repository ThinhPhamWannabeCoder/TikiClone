/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product',({strapi})=>({
    async getAll(ctx, next){
        // Phai
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
    }
}));
