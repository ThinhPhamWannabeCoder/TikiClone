/**
 * payment-option service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::payment-option.payment-option',({strapi})=>({
    getAll:async ()=>{
        const data = await strapi.entityService.findMany('api::payment-option.payment-option',{
            fields: ["name","description","default"],
            populate:{
                Icon:{
                    fields: ["url"]
                }
            }
        //   
        })
        return data
    },

}));

