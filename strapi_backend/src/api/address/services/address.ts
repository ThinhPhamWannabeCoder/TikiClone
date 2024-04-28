/**
 * address service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::address.address',({strapi})=>({
    getByUserId:async (userId: number, option: boolean)=>{
        const queryOptions:any = {
            fields: ["type", "address", "contact_name", "contact_mobile","default"],
            filters:{
                
                user: {
                    id: userId
                }
            }
        }
        if(option) {
            queryOptions.filters["default"] = option
            
        }
        const data  = await strapi.entityService.findMany('api::address.address',queryOptions)
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

