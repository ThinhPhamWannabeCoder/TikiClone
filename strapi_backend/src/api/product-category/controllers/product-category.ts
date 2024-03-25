/**
 * product-category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product-category.product-category',({strapi})=>({
    async getBest(ctx, next){

    },
    async getTop(ctx, next){

    },
}));
