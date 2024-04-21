/**
 * address service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::address.address',({strapi})=>({
    getByUserId:async ()=>{
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

