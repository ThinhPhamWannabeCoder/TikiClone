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
        ctx.body={
            data: data
        };
    },
    
    async create(ctx, next){
        const body = ctx.request.body
        const data = await strapi.service('api::address.address').createNew(body);
        ctx.body={
            data: data
        };
    },
    async deleteById(ctx, next){
        const {id} = ctx.params;
        const data = await strapi.service('api::address.address').deleteById(id);
        ctx.body={
            data: data
        };
    },
    async updateByUserId(ctx, next){
        const {id} = ctx.params;
        const body = ctx.request.body

       
        const data = await strapi.service('api::address.address').updateById(id, body);
        ctx.body=data;
    },


    // GET NEW NOTIFICATI
}));
