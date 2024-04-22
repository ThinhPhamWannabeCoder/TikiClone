/**
 * order service
 */

import { factories } from '@strapi/strapi';
import product from '../../product/controllers/product';

export default factories.createCoreService('api::order.order',({strapi})=>({
 
    createNewOrder: async (body) =>{
        const {userId, addressId, deliveryId, orders} = body
        try {
            const promises = orders.map(async(order)=>{
                //  Chuan bi thong tin product
                let totalProductCost = 0;
                order.products.forEach(product => {
                    totalProductCost += product.quantity * product.price;
                })
                // const orderId = 
                const orderId=await strapi.entityService.create('api::order.order', {
                    data:{
                        user: userId,
                        address: addressId,
                        store: order.storeId,
                        delivery: deliveryId,
                        deliveryTotalCost: order.deliveryCost,
                        productTotalCost: totalProductCost,
                        publishedAt: Date.now()
                    },
                    fields: ["id"]
                })
                const detailResult = await Promise.all(order.products.map(async(product)=>{
                    console.log({
                        order: orderId,
                        product: product.id,
                        quantity: product.quantity,
                        totalPrice: product.quantity * product.price,
                        publishedAt: Date.now()
                    })
                    return await strapi.entityService.create('api::oder-detail.oder-detail',{
                        data:{
                            order: orderId,
                            product: product.id,
                            quantity: product.quantity,
                            totalPrice: product.quantity * product.price,
                            publishedAt: Date.now()

                        },
                        fields: ["id"]
                    })
                }))
                return orderId
            })
            // console.log("check orderDetail")
            const ids = await Promise.all(promises);
            const response = {
                status: 204,
                message: "Order has been created",
                data: ids
            }
            return response
            
            
        } catch (error) {
            return {
                status: 500,
                message: error.message,

            }
        }
        

    },
    getAllOrder:async ()=>{
        return "Hello"
        try {
            const id = [1, 2];
            const promises = id.map(async (item) => {
                return await strapi.entityService.findOne('api::product.product', item);

            });
    
            const data = await Promise.all(promises);
            return data;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error; // Throw the error for handling elsewhere if needed
        }

        
    },
    buyerGetOrderById: async(orderId: number)=>{
        const data = await strapi.entityService.findOne('api::order.order',orderId,{
            fields:["deliveryTotalCost","productTotalCost","status","seller_status"],
            populate: {
                oder_detail:{
                    fields:["quantity", "totalPrice"],
                    populate: {
                        product: {
                            fields: ["name"],
                            populate: {
                                primary_image: {
                                    fields: ["url"]
                                }
                            }
                        }
                    }
                }
            }
            // populate: "*"
        })
        return {
            status: 200,
            data: data,
            message: "Fetch successfully"
        }
    },
    // updateOrder: async (body)=>{
    //     return "Hello"

    // }
    updateDeliveryStatus: async(body)=>{
        const {id, status} = body;
        const data = await strapi.entityService.update('api::order.order',id,{
            data:{
                status: status
            }
        })
        return {
            status: 204,
            data: data,
            message: "Updated Successfully"
        }
    }
}));

