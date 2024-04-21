/**
 * order service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::order.order',({strapi})=>({
    createNewOrder:async (body)=>{
        // TODO PROCESSING
        const {userId, addressId, deliveryId, orders} = body
        // console.log(products)
        orders.forEach(item=>{
            console.log(item)
            // CREATE ORDER
            // const id = await strapi.entittySerivce('api::order.order').create({},{})
            // CALCULATE AGGREATED VALUE
            // CREATE ORDER_DETAIL

        })
        // console.log(groupedData)
        // return groupedData;
        // test
        return  "Tested"

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
