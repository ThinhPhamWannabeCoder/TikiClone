/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order',({strapi})=>({
    async create(ctx,next){
        const body = ctx.request.body;
        const payload = await strapi.service('api::order.order').createNewOrder(body);
        ctx.body = payload;
    },
    async getByUserId(ctx, next){
        
        const payload = await strapi.service('api::order.order').getAllOrder();
        ctx.body = payload
    },
    async buyerGetById(ctx, next){
        const {id} = ctx.params
        const payload = await strapi.service('api::order.order').buyerGetOrderById(id);
        ctx.body = payload;
    },
    async updateOrder(ctx, next){
        const payload = await strapi.service('api::order.order').updateOrder();
        ctx.body = payload;
    },
    async updateDeliveryStatus(ctx, next){
        const body = ctx.request.body;
        const payload = await strapi.service('api::order.order').updateDeliveryStatus(body);
        ctx.body = payload;
    },

}));
