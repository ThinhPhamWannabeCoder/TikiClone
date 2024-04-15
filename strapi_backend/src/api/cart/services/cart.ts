/**
 * cart service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::cart.cart',({strapi})=>({
    getCartsByUserId: async (userId: string) => {
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
      

    }
}));
