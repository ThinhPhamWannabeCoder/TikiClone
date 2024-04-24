/**
 * delivery service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::delivery.delivery',({strapi})=>({
    getAll:async ()=>{
        const data = await strapi.entityService.findMany('api::delivery.delivery',{
            fields: ["name","description","base_price","duration","default"]
          
        })
        // const res = data.map(item=> {
        //     return {
        //         id: item.id,
        //         name: item.name,
        //         description: item.description,
        //         base_price: item.base_price,
        //         duration: item.duration
        //     }
        // })
        return data
    },
    getDefault:async ()=>{
        const data = await strapi.entityService.findMany('api::delivery.delivery',{
                fields: ["name","description","base_price","duration","default"],
                filters:{
                    default: true
                }
            })
        // const res = data.map(item=> {
        //     return {
        //         id: item.id,
        //         name: item.name,
        //         description: item.description,
        //         base_price: item.base_price,
        //         duration: item.duration

        //     }
        // })
        return data

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
