/**
 * cart service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::cart.cart',({strapi})=>({
    getCartsByUserId: async (userId: number) => {
        const data = await strapi.entityService.findMany('api::cart.cart',{
            fields: ["id","quantity"],
            filters:{
                user:{
                    id: userId.toString()
                }
            },
            populate: {
                product: {
                    fields: ["id", "name", "price"],
                    populate:{
                        store:{
                            fields: [ "name"]
                        },
                        primary_image:{
                            fields: ["url"]
                        }

                    }
                },

            }
        })
        
        return data;
    },
    deleteCartsByIds: async(body)=>{
    //   console.log(body.ids);
      const ids:number[] = body.ids;
        try{
            
            await strapi.db.query("api::cart.cart").deleteMany({
                where: {
                  id: {
                    $in: ids,
                  },
                },
              });
            return{
                bug: 0,
                msg: "Successfully delete carts"
            }
        }
        catch(e){
            return {
                bug: 1,
                msg: "Can't not delete"
            }
        }
      

    },
    addToCart: async(body)=>{
        try{
            const data = await strapi.entityService.findMany('api::cart.cart',{
                populate: "*",
                filters:{
                    user:{
                        id: parseInt(body.userId),
                    },
                    product:{
                        id: parseInt(body.productId)   
                    }
                }
            })
            if(data.length>0){
                return {
                    status: 400,
                    msg: "User already has this cart"
                }
            }
            console.log(data)
            const entry = await strapi.entityService.create('api::cart.cart',{
                data:{
                    user: body.userId,
                    product: body.productId,
                    quantity: body.quantity,
                }
            })
            return{
                bug: 0,
                msg: entry,
            }
        }
        catch(e){
            console.log(e.message)
            return {
                bug: 1,
                msg: e.message
            }
        }
        
    },
}));
