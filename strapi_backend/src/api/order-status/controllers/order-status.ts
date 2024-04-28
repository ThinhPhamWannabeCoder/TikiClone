/**
 * order-status controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order-status.order-status', ({strapi})=>({
    async getAll(ctx, next){
        ctx.body = await strapi.entityService.findMany('api::order-status.order-status',{
            fields:["id", "name"]
        })
    }
}));
