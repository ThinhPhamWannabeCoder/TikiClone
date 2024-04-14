/**
 * cart controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::cart.cart',({strapi})=>({
    async getByUserId(ctx,next){

        ctx.body ="Hello"
    },
    async addCart(ctx, next){
        ctx.body ="Hello"

    },
    async updateQuantity(ctx, next){
        ctx.body ="Hello"

    },
    async deleteByIds(ctx, next){
        ctx.body ="Hello"
        
    }
    //CREATE NEW CART

    // EDIT CART -> Quantity

    // DELETE all Cart
    // DELETE one Cart
}));
