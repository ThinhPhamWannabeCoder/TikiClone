/**
 * test controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::test.test',({strapi})=>({
    // CREATE NEW NOTIFICATION
    async getAll(ctx, next){
        
        ctx.body="hello"
    }
    // GET NEW NOTIFICATION
}));
