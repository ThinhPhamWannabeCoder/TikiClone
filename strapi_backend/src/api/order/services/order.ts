/**
 * order service
 */

import { factories } from '@strapi/strapi';
import product from '../../product/controllers/product';

export default factories.createCoreService('api::order.order',({strapi})=>({
 
    createNewOrder: async (body) =>{
        const {userId, addressId, paymentId, deliveryId, orders} = body
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
                        payment_option: paymentId, 
                        status: 2,
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
    getAllOrderByOrderStatus:async (para : {userId: number, status: number})=>{

        let filters = {
            user:{
                id: para.userId
            }
            
        }
        if(para.status){
            filters["status"] = {
                id: para.status
            }
        }
        const data = await strapi.entityService.findMany('api::order.order',{
            // popu
            // fields
            
            fields:["id","deliveryTotalCost","productTotalCost"],
            populate:{
                store:{
                    fields: ["id", "name"]
                },
                status:{
                    fields: ["id", "name"]
                },
                oder_details:{
                    fields: ["quantity, totalPrice"],
                    populate: {
                        product:{
                            fields: ["id", "name"],
                            populate:{
                                primary_image: {
                                    fields: ['id', 'url']
                                }
                            }
                        }
                    },
                },
                
            },
            filters: filters

        })
        console.log(data)
        return data

        
    },

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

