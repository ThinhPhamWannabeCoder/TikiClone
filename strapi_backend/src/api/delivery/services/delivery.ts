/**
 * delivery service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::delivery.delivery',({strapi})=>({
    getAll:async ()=>{
        const data = await strapi.entityService.findMany('api::delivery.delivery',{
            populate: '*',
          
        })
        const res = data.map(item=> {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                base_price: item.base_price
            }
        })
        return res
    },
    getById:async (id:number)=>{
        const data = await strapi.entityService.findMany('api::delivery.delivery',{
                populate: '*',
                fitlers:{
                    id: id                 
                }
            })
        const res = data.map(item=> {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                base_price: item.base_price
            }
        })
        return res

    },
    createNew: async()=>{
        return "Hello"

    },
    deleteById: async (id:number)=>{
        console.log("checl")
        const status = await strapi.db.query('api::delivery.delivery').delete({
            where: { id: id },
          });
          // This will return  the whole
        return status

    },
    updateById: async ()=>{
        return "Hello"

    }
}));
