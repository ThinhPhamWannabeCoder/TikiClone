/**
 * cart controller
 */

import { factories } from '@strapi/strapi'
import { useId } from 'react';

export default factories.createCoreController('api::cart.cart',({strapi})=>({
    async getByUserId(ctx,next){
        const {id} = ctx.params; 
        
        const data = await strapi.service('api::cart.cart').getCartsByUserId(id);
        // console.log(data);
        const payload = data.map(item=>{
            return{
                id: item.id,
                quantity: item.quantity,
                product:{
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    primaryImage: item.product.primary_image.url,
                },
                store:{
                    id: item.product.store.id,
                    name: item.product.store.name
                }
            }
        })  
        ctx.body=payload 

        
    },
    async addCart(ctx, next){
        // Sanitize request
        // 
        ctx.body ="Hello"
        
        

    },
    async updateQuantity(ctx, next){
        const  {id, quantity} = ctx.request.query;
        
        const entry = await strapi.entityService.update("api::cart.cart",parseInt(id as string) ,{
            data:{
                quantity: parseInt(quantity as string)
            }
        })
        ctx.body = entry
    },
    async deleteByIds(ctx, next){
        // Sanitize request

        const body= ctx.request.body
        const payload = await strapi.service('api::cart.cart').deleteCartsByIds(body);
        // if(payload.bug){
        if(!payload.bug){
            ctx.response.status=200,

            ctx.response.body={
                status: 200,
                message: payload.msg
            }
        }
        else{
            ctx.response.status=400,
            ctx.response.body={
                status: 400,
                message: "Delete fail, please contact to admin"
            }
        }

    },
    async addToCart(ctx, next){
        const body = ctx.request.body;
        const payload = await strapi.service('api::cart.cart').addToCart(body);
        if(!payload.bug){
            ctx.response.status=200,

            ctx.response.body={
                status: 200,
                message: payload.msg
            }
        }
        else{
            ctx.response.status=400,
            ctx.response.body={
                status: 400,
                message: "Add to cart fail, please contact to admin",
                errmsg: payload.msg,
            }
        }

    }

}));
