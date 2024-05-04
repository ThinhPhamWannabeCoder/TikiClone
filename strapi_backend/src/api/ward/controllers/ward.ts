/**
 * ward controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::ward.ward',({strapi})=>({
    async getAll(ctx,next){
        const {district} = ctx.request.query
        const payload = await strapi.service('api::ward.ward').getAll({district:district});
        if(payload.length == 0){
            ctx.body = {
                status: 200,
                data: payload,
                message : `There is no ward with district ${district} `
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
    
}))

