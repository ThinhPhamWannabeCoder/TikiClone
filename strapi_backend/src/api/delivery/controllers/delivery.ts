/**
 * delivery controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::delivery.delivery',({strapi})=>({
    async getAll(ctx,next){
        const payload = await strapi.service('api::delivery.delivery').getAll();
        ctx.body = payload
    },
    async getById(ctx, next){
        const payload = await strapi.service('api::delivery.delivery').getById();
        ctx.body = payload
    },
    async create(ctx, next){
        const payload = await strapi.service('api::delivery.delivery').createNew();
        ctx.body = payload
    },
    async delete(ctx, next){
        const payload = await strapi.service('api::delivery.delivery').deleteById();
        ctx.body = payload
    },
    async update(ctx, next){
        const payload = await strapi.service('api::delivery.delivery').updateById();
        ctx.body = payload
    },
}))
