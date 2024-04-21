/**
 * notification-user controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::notification-user.notification-user',({strapi})=>({
    // CREATE NEW NOTIFICATION
    async getByUseOd(ctx, next){
        ctx.body="check"
    }
    // GET NEW NOTIFICATION
}));
