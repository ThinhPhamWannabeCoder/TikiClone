/**
 * district service
 */

import { factories } from '@strapi/strapi';
import city from '../../city/controllers/city';
import ward from '../../ward/controllers/ward';

export default factories.createCoreService('api::district.district',({strapi})=>({
    getAll: async(data: {city: number, ward: number})=>{
      
        const options:any = {
            fields: ["name"],
            filters:{},
           
        }
        if(data.city) options.filters["city"] = {id:data.city}
        if(data.ward) options.filters["wards"] = {id: data.ward}
        const res = await strapi.entityService.findMany('api::district.district',options)
        return res
    },
    
}));

