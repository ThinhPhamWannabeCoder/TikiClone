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
   
    async getBest(ctx,next){
        // GET BÉT PRODUCT IN THE PERIOD OF A MONTH ON TOTAL PRICE
        const payload = await strapi.service('api::category.category').getBest();
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
        // ctx.body = payload;

    },
    async getTop(ctx,next){
        // TOP PRODUCT BASED ON QUANTITY
        const payload = await strapi.service('api::category.category').getTop();
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
        // ctx.body = payload;
    },
    async getSubNav(ctx, next){
        const {id} = ctx.params;
        const payload = await strapi.service('api::category.category').getSubNav(id);if(payload.length == 0){
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
    }
    
}))
