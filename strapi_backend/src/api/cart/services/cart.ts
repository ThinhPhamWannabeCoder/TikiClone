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
              
                const entry = await strapi.entityService.update('api::cart.cart',data[0].id, {
                    data:{
                        user: body.userId,
                        product: body.productId,
                        quantity: body.quantity + data[0].quantity,
                    }
                })
                return{
                    bug: 0,
                    msg: "Them hang vao gio thanh cong",
                }
            }
            
            const entry = await strapi.entityService.create('api::cart.cart',{
                data:{
                    user: body.userId,
                    product: body.productId,
                    quantity: body.quantity,
                }
            })
            return{
                bug: 0,
                msg: "Them hang vao gio thanh cong",
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
