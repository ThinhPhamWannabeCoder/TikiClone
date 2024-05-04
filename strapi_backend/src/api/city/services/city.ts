/**
 * city service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::city.city',({strapi})=>({
    getAll: async(data: {district: number})=>{

        const options:any = {
            fields: ["name"],
            filters:{},
        
        }
        if(data.district) options.filters["districts"] = {id:data.district}

        const res = await strapi.entityService.findMany('api::city.city',options)
        return res
    }
}));
