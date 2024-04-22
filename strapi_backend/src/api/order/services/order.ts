/**
 * order service
 */

import { factories } from '@strapi/strapi';
import product from '../../product/controllers/product';

export default factories.createCoreService('api::order.order',({strapi})=>({
    createNewOrder:async (body)=>{
        // TODO PROCESSING
        const {userId, addressId, deliveryId, orders} = body
        const orderData = [];
        const orderDetailData = []
        const productsData = []
        // console.log(products)
        orders.forEach(item=>{
            let totalCost = 0 ;
            let productData  = []
            item.products.forEach(product=>{
                productData.push({
                    id: product.id,
                    quantity: product.quantity,
                    totalPrice: product.quantity  * product.price
                })
                totalCost += product.quantity  * product.price
            })
            productsData.push({
                products: productData
            })
            const data = {
                user: userId,
                address: addressId,
                store: item.storeId,
                delivery: deliveryId,
                deliveryTotalCost: item.deliveryCost,
                productTotalCost: totalCost,
            }    
            orderData.push(data)
            // console.log(data)
        })
            // CREATE ORDER
            // const id = await strapi.entittySerivce('api::order.order').create({},{})
            // CALCULATE AGGREATED VALUE
            // CREATE ORDER_DETAIL
            let {ids} = await strapi.db.query('api::order.order').createMany({
                data: [
                    {
                      user: 1,
                      address: 1,
                      store: 1,
                      delivery: 1,
                      deliveryTotalCost: 50000,
                      productTotalCost: 12000
                    },
                    {
                      user: 1,
                      address: 1,
                      store: 2,
                      delivery: 1,
                      deliveryTotalCost: 25000,
                      productTotalCost: 10000
                    }
                   ]
                   
            });

            ids.forEach((value, index)=> {
                orderDetailData.push({
                    order: value,
                    product: 3,
                    quantity: 20,
                    totalPrice: 1000,
                })
            })
            console.log(orderDetailData)

            const result  = await strapi.db.query('api::oder-detail.oder-detail').createMany({
                data: orderDetailData
            });
       
        return  result

    },
    getAllOrder:async ()=>{
        // return "Hello"
        try {
            const id = [1, 2];
            const promises = id.map(async (item) => {
                id.map(async(item)=>{}
                return await strapi.entityService.findOne('api::product.product', item);

            });
    
            const data = await Promise.all(promises);
            return data;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error; // Throw the error for handling elsewhere if needed
        }
// DAY LA CACH XU LY
        // getAllOrdersAndDetails: async () => {
        //     try {
        //         const orderIds = [1, 2]; // Sample order IDs
        
        //         // Create promises for each order and its details
        //         const promises = orderIds.map(async (orderId) => {
        //             // 1. Create order
        //             const orderData = {
        //                 // Order data
        //                 // userId, addressId, deliveryId, etc.
        //             };
        //             const createdOrder = await strapi.services.order.create(orderData);
        
        //             // 2. Create order details
        //             const orderDetailsData = [
        //                 // Order details data for the orderId
        //                 // { productId: 1, quantity: 10 },
        //                 // { productId: 2, quantity: 20 },
        //             ];
        //             const createdOrderDetails = await Promise.all(orderDetailsData.map(async (detail) => {
        //                 return await strapi.services.orderDetail.create({
        //                     orderId: createdOrder.id,
        //                     productId: detail.productId,
        //                     quantity: detail.quantity,
        //                 });
        //             }));
        
        //             // Return any data needed from this operation
        //             return { order: createdOrder, details: createdOrderDetails };
        //         });
        
        //         // Wait for all promises to resolve
        //         const results = await Promise.all(promises);
        
        //         // Handle or process results as needed
        //         console.log('All orders and details created:', results);
        //         return results;
        //     } catch (error) {
        //         console.error('Error creating orders and details:', error);
        //         throw error; // Throw the error for handling elsewhere if needed
        //     }
        // },
        
    },
    // getOrderById: async(orderId: number)=>{
    //     return "Hello"

    // },
    // updateOrder: async (body)=>{
    //     return "Hello"

    // }
}));

[
 {
   user: 1,
   address: 1,
   store: 1,
   delivery: 1,
   deliveryTotalCost: 50000,
   productTotalCost: 12000
 },
 {
   user: 1,
   address: 1,
   store: 2,
   delivery: 1,
   deliveryTotalCost: 25000,
   productTotalCost: 10000
 }
]
