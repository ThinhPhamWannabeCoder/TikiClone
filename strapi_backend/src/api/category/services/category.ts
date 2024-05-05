/**
 * category service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::category.category',({strapi})=>({
    getAll: async(data: {parent: number})=>{
        let options:any = {}

        if(data.parent){
            options = {parent: data.parent}

        }
        else{
            options = {parent: null}

        }
        // if(data.subcategory) options.filters["districts"] = {id:data.district}

        // const res = await strapi.entityService.findMany('api::category.category',options)
        const res = await strapi.db.query('api::category.category').findMany({
            select:["name"],
            where:options,
            populate:{
                image:{
                    select: ["url"]
                },
            }
        })
        return res
    }
}));

