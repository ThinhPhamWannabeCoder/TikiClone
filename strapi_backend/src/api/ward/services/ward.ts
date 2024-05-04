/**
 * ward service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::ward.ward',({strapi})=>({
    getAll: async(data: {district: number})=>{
      
        const options:any = {
            fields: ["name"],
            filters:{},
           
        }
        if(data.district) options.filters["district"] = {id:data.district}
  
        const res = await strapi.entityService.findMany('api::ward.ward',options)
        return res
    },
    
}));