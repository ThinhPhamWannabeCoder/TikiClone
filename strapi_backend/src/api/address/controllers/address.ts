/**
 * address controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::address.address',({strapi})=>({
    // CREATE NEW NOTIFICATION
    async getByUserId(ctx, next){
        const {id} = ctx.params
        const {main} = ctx.request.query;
        const option = main as string ==="true";
        console.log(option)
        const data = await strapi.service('api::address.address').getByUserId(id, option);
        ctx.body=data;
    },
    async getById(ctx, next){
        const {id} = ctx.params;
       
        const data = await strapi.service('api::address.address').getById(id);
        ctx.body=data;
    },
    async create(ctx, next){
        const data = await strapi.service('api::address.address').createNew();
        ctx.body=data;
    },
    async update(ctx, next){
        const data = await strapi.service('api::address.address').updateById();
        ctx.body=data;
    },
    async delete(ctx, next){
        const data = await strapi.service('api::address.address').deleteById();
        ctx.body=data;
    },

    // GET NEW NOTIFICATION
}));
