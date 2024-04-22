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
