/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category',({strapi})=>({
    async getAll(ctx,next){
        const {parent} = ctx.request.query
        const payload = await strapi.service('api::category.category').getAll({parent:parent});
        if(payload.length == 0){
            ctx.body = {
                status: 200,
                data: payload,
                message : `There is no category`
            }
        }
        else{
            ctx.body = {
                status: 200,
                data: payload,
                message : 'succeeded'
            }
        }
    },
    async getNav(ctx,next){
        const payload = await strapi.service('api::category.category').getNav();
        // if(payload.length == 0){
        //     ctx.body = {
        //         status: 200,
        //         data: payload,
        //         message : `There is no category`
        //     }
        // }
        // else{
        //     ctx.body = {
        //         status: 200,
        //         data: payload,
        //         message : 'succeeded'
        //     }
        // }
        ctx.body = payload;

    },
    async getBest(ctx,next){
        const payload = await strapi.service('api::category.category').getBest();
        // if(payload.length == 0){
        //     ctx.body = {
        //         status: 200,
        //         data: payload,
        //         message : `There is no category`
        //     }
        // }
        // else{
        //     ctx.body = {
        //         status: 200,
        //         data: payload,
        //         message : 'succeeded'
        //     }
        // }
        ctx.body = payload;

    },
    async getTop(ctx,next){
        const payload = await strapi.service('api::category.category').getTop();
        // if(payload.length == 0){
        //     ctx.body = {
        //         status: 200,
        //         data: payload,
        //         message : `There is no category`
        //     }
        // }
        // else{
        //     ctx.body = {
        //         status: 200,
        //         data: payload,
        //         message : 'succeeded'
        //     }
        // }
        ctx.body = payload;
    },
    
}))
