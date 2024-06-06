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
            },
            orderBy: {id: "ASC"}
        })
        return res
    },
    
    getBest: async ()=>{
        // FORMULAR: GET BEST NAVIGATION 
        // USER: Product, Order (Transaction), ON Total Revenue
        // DEFAULT IF CAN NOT GET PROPER LIST
        const res = await strapi.db.query('api::category.category').findMany({
            select:["name"],
            //where:options,
            populate:{
                image:{
                    select: ["url"]
                },
            },
            orderBy: {id: "ASC"},
            limit: 4,
        })
        return res;
    },
    getTop: async ()=>{
        // FORMULAR: GET TOP NAVIGATION 
        // USER: Product, Order (Transaction), ON Total Amount
        const res = await strapi.db.query('api::category.category').findMany({
            select:["name"],
            //where:options,
            populate:{
                image:{
                    select: ["url"]
                },
            },
            orderBy: {id: "DESC"},
            limit: 4,
        })
        return res;
    },
    getSubNav: async (parent: number)=>{
        // FORMULAR: GET TOP NAVIGATION 
        // USER: Product, Order (Transaction), ON Total Amount
        let options:any = {parent: parent};

        const res = await strapi.db.query('api::category.category').findMany({
            select:["name"],
            where:options,
            populate:{
                image:{
                    select: ["url"]
                },
            },
            orderBy: {id: "ASC"},
            limit: 6,
        })
        return res;
    },

}));

