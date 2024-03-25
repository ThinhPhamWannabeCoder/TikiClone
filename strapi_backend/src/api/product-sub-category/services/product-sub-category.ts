/**
 * product-sub-category service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product-sub-category.product-sub-category',({strapi})=>({
    getTopOrderId: async(categoryId:number)=>{
        // Handle theo category id da roi moi lam cai nay duoc de lay dung phan han
        // Filtering theo category id chi lay nhung subcategory thuoc category nay
        const listSubcategory = await strapi.entityService.findMany('api::product-sub-category.product-sub-category',{
            fields:['id', 'name'],
            filters: {
                product_category:{
                    id: categoryId
                }
            },
        })
        return listSubcategory;
    },
    getTopSaleId: async(categoryId:number)=>{
        const listSubcategory = await strapi.entityService.findMany('api::product-sub-category.product-sub-category',{
            fields:['id', 'name'],
            filters: {
                product_category:{
                    id: categoryId
                }
            },
        })
        return listSubcategory;
    }
}));
