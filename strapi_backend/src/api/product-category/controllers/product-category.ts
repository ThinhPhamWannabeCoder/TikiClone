/**
 * product-category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product-category.product-category',({strapi})=>({
    async getBest(ctx, next){
        const ids = await strapi.service('api::product-category.product-category').getTopSaleId();
        const data = await strapi.entityService.findMany('api::product-category.product-category', {
            // fields: ['id', 'name'],
            filters: {id: ids},
            populate:{
                image: {
                    // fields: ['url']
                }
            }

        })
        const payload = data.map(item=>{
            return{
                id: item.id,
                name: item.name,
                image: item.image.url
            }
        })
        // console.log(data);
        ctx.body = payload;
    },
    async getTop(ctx, next){
        const ids = await strapi.service('api::product-category.product-category').getTopOrderId();
        const data = await strapi.entityService.findMany('api::product-category.product-category',{
            // fields: ['id', 'name'],
            filters: {id: ids},
            populate:{
                image: {
                    // fields: ['url']
                }
            }
        })
        const payload = data.map(x => {
            return {
                id: x.id,
                name: x.name,
                image: x.image.url,
            }
        })
        ctx.body = payload
    },
    async getNav (ctx, next){
        const data = await strapi.entityService.findMany('api::product-category.product-category',{
            populate: '*',
        })
        const payload = data.map(x => {
            return {
                id: x.id,
                name: x.name,
                image: x.image.url,
            }
        })
        ctx.body = payload;
    
    }
}));
