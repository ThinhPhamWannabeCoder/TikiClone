/**
 * cart controller
 */

import { factories } from '@strapi/strapi'
import { useId } from 'react';

export default factories.createCoreController('api::cart.cart',({strapi})=>({
    async getByUserId(ctx,next){
        const {id} = ctx.params; 
        console.log(id)
        if(id){
            const data = await strapi.entityService.findMany('api::cart.cart',{
                filters:{
                    user:{
                        id: id.toString()
                    }
                },
                populate: '*'
            })
            // Phai dung service cuap product de lay duoc thong tin
            // Lay them thong tin store nua
            // Tao service store
            const payload = data.map(item=>{
                return {
                    id: item.id,
                    quantity: item.quantity,
                    product:{
                        id: item.product.id,
                        name: item.product.name,
                        price: item.product.price
                    }

                }
            })
            // console.log(payload);
            ctx.body=payload
            

        }
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
