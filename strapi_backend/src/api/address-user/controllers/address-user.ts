/**
 * address-user controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::address-user.address-user',({strapi})=>({
    async getAll(ctx, next){
        const payload = await await strapi.service('api::order.order').getAll();
        ctx.body= payload;
    },
    async getById(ctx, next){
        const payload = await await strapi.service('api::order.order').getById();
        ctx.body= payload;
    },
    async create(ctx, next){
        const payload = await await strapi.service('api::order.order').create();
        ctx.body= payload;
    },
    async update(ctx, next){
        const payload = await await strapi.service('api::order.order').update();
        ctx.body= payload;
    },
    async delete(ctx, next){
        const payload = await await strapi.service('api::order.order').delete();
        ctx.body= payload;
    },
    
    
}))