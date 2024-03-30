/**
 * promotion controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::promotion.promotion',({strapi})=>({
    async getAll(ctx, next){
        const data = await strapi.entityService.findMany('api::promotion.promotion',{
            populate:{
                banner:{}
            }
        })
        const payload = data.map(item=>{
            return{
                id: item.id,
                name: item.name,
                image: item.banner.url
            }
        })
        ctx.body = payload
    }
}))
