/**
 * address controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::address.address',({strapi})=>({
    // CREATE NEW NOTIFICATION
    async getByUserId(ctx, next){
        const {userId} = ctx.params
        console.log(userId)
        const {main} = ctx.request.query;
        const option = main as string ==="true";
        console.log(option)
        const data = await strapi.service('api::address.address').getByUserId(userId, option);
        ctx.body=data;
    },
    async updateByUserId(ctx, next){
        const {userId} = ctx.params;
       
        const data = await strapi.service('api::address.address').getById(userId);
        ctx.body=data;
    },
    async create(ctx, next){
        const data = await strapi.service('api::address.address').createNew();
        ctx.body=data;
    },
    async deleteById(ctx, next){
        const data = await strapi.service('api::address.address').updateById();
        ctx.body=data;
    },


    // GET NEW NOTIFICATI
}));
