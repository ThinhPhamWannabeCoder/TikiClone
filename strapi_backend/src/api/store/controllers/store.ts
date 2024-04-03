/**
 * store controller
 */

import { factories } from '@strapi/strapi'



export default factories.createCoreController('api::store.store',({strapi})=>({
    async getShortInfo(ctx,next){
        const {id}=ctx.params;
        ctx.body = await strapi.service('api::store.store').getShort(id);
    },
    async getStoreIntroduction(ctx, next){
        
    }
}));
