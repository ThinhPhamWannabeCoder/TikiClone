/**
 * product-sub-category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product-sub-category.product-sub-category',({strapi})=>({
    async getBest(ctx, next){
        const {category} = ctx.params;
        const listSubcategory = await strapi.service('api::product-sub-category.product-sub-category').getTopOrderId(category);
        ctx.body = listSubcategory;
    },
    async getTop(ctx, next){
        const {category} = ctx.params;

        const listSubcategory = await strapi.service('api::product-sub-category.product-sub-category').getTopOrderId(category);
        ctx.body = listSubcategory;
    },
    async getNav(ctx, next){
        const {category} = ctx.params;
        const data = await strapi.entityService.findMany('api::product-sub-category.product-sub-category',{
            // fields:['id','name'],
            filters:{
                product_category:{
                    id: category
                }
            }
        })
        const payload = data.map(x => {
            return {
                id: x.id,
                name: x.name,
                // image: x.image.url,
            }
        })
        ctx.body = payload;
    }
}));
