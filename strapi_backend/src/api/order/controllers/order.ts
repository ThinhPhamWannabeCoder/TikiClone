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
        const {userId} = ctx.params;
        const {status} = ctx.request.query;
        const payload = await strapi.service('api::order.order').getAllOrderByOrderStatus({userId: userId, status: status});
        ctx.body = {
            data: payload
        }
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
