/**
 * city controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::city.city',({strapi})=>({
    async getAll(ctx,next){
        const {district} = ctx.request.query
        const payload = await strapi.service('api::city.city').getAll({district:district});
        if(payload.length == 0){
            ctx.body = {
                status: 200,
                data: payload,
                message : `There is no city with district ${district}`
            }
        }
        else{
            ctx.body = {
                status: 200,
                data: payload,
                message : 'succeeded'
            }
        }
        // ctx.body = payload
    },
    
}))
