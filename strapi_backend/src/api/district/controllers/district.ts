/**
 * district controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::district.district',({strapi})=>({
    async getAll(ctx,next){
        const {ward, city} = ctx.request.query
        const payload = await strapi.service('api::district.district').getAll({city:city, ward:ward});
        if(payload.length == 0){
            ctx.body = {
                status: 200,
                data: payload,
                message : `There is no district with city ${city} and ward: ${ward}`
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

