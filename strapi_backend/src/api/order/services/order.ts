/**
 * order service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::order.order',({strapi})=>({
    createNewOrder:async (body)=>{
        // TODO PROCESSING
        return "Hello"
    },
    // getAllOrder:async ()=>{
    //     return "Hello"

    // },
    // getOrderById: async(orderId: number)=>{
    //     return "Hello"

    // },
    // updateOrder: async (body)=>{
    //     return "Hello"

    // }
}));
