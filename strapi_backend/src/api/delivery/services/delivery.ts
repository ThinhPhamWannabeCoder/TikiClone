/**
 * delivery service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::delivery.delivery',({strapi})=>({
    getAll:async ()=>{
        return "Hello"
    },
    getById:async ()=>{
        return "Hello"

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
