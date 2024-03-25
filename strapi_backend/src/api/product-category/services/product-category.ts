/**
 * product-category service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product-category.product-category', ({strapi})=>({
    getTopOrderId: async()=>{
        // Handle and return best category based on Order amount
        return [1,2,3,4];
    },
    getTopSaleId: async()=>{
        // Handle and return best category based on Sales amount

        return [4,2,3,8];
    }
}));
