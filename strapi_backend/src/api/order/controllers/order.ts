/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order',({strapi})=>({
    async create(ctx,next){
        const payload = await strapi.service('api::order.order').createNewOrder();
        ctx.body = payload;
    },
    async getAllOrder(ctx, next){
        const payload = await strapi.service('api::order.order').getAllOrder();
        ctx.body = payload
    },
    async getOrderById(ctx, next){
        const payload = await strapi.service('api::order.order').getOrderById();
        ctx.body = payload;
    },
    async updateOrder(ctx, next){
        const payload = await strapi.service('api::order.order').updateOrder();
        ctx.body = payload;
    },
    async updateRandom(ctx, next){
        const payload = await strapi.service('api::order.order').updateOrder();
        ctx.body = payload;
    }
}));
