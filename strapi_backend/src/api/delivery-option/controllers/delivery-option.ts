/**
 * delivery-option controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::delivery-option.delivery-option',({strapi})=>({
    async getAll(ctx,next){
        const payload = await strapi.service('api::delivery-option.delivery-option').getAll();
        ctx.body = payload
    },
    async getById(ctx, next){
        const payload = await strapi.service('api::delivery-option.delivery-option').getById();
        ctx.body = payload
    },
    async create(ctx, next){
        const payload = await strapi.service('api::delivery-option.delivery-option').create();
        ctx.body = payload
    },
    async delete(ctx, next){
        const payload = await strapi.service('api::delivery-option.delivery-option').delete();
        ctx.body = payload
    },
    async update(ctx, next){
        const payload = await strapi.service('api::delivery-option.delivery-option').update();
        ctx.body = payload
    },
}))
