/**
 * payment-option controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::payment-option.payment-option',({strapi})=>({
    async getAll(ctx,next){
        const payload = await strapi.service('api::payment-option.payment-option').getAll();
        ctx.body = payload
    },
    
}))

