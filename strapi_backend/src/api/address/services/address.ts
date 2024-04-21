/**
 * address service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::address.address',({strapi})=>({
    getByUserId:async (userId: number)=>{
        const data  = await strapi.entityService.findMany('api::address.address',{
            fields: ["type", "address", "contact_name", "contact_mobile","default"],
            filters:{
                user: {
                    id: userId
                }
            }
        })
        return data
    },
    getById:async (id: number)=>{
        const data  = await strapi.entityService.findOne('api::address.address',id,{
            fields: ["type", "address", "contact_name", "contact_mobile","default"],

        })
        return data

    },
    createNew: async()=>{
        return "Hello"

    },
    deleteById: async ()=>{
        return "Hello"

    },
    updateById: async ()=>{
        return "Hello"

    }
}));

