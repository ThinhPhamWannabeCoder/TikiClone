/**
 * order controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::order.order',({strapi})=>({
    async create(ctx,next){
        const body = ctx.request.body;
        const payload = await strapi.service('api::order.order').createNewOrder(body);
        ctx.body = payload;
    },
    async getByUserId(ctx, next){
        console.log("hi")
        const {userId} = ctx.params;
        const {status} = ctx.request.query;
        const payload = await strapi.service('api::order.order').getAllOrderByOrderStatus({userId: userId, status: status});
        console.log(payload)
        payload.forEach(item => {
            console.log(item.oder_details)
            // return{
            //     id: item.id,
            //     status: item.status.name,
            //     totalPrice: item.deliveryTotalCost + item.productTotalCost,
            //     orders: item.oder_details.map(orderDetail => {
            //         return {
            //             id: orderDetail.id,
            //             image: orderDetail.product.primary_image.url,
            //             name: orderDetail.product.name,
            //             totalProductPrice: orderDetail.totalPrice,
            //             store: item.store.name,
            //         }
            //     })
            // }
        })
        ctx.body = {
            data: payload.map(item => {
                return{
                    id: item.id,
                    status: item.status.name,
                    totalPrice: item.deliveryTotalCost + item.productTotalCost,
                    orders: item.oder_details.map(orderDetail => {
                        return {
                            id: orderDetail.id,
                            image: orderDetail.product.primary_image.url,
                            name: orderDetail.product.name,
                            totalProductPrice: orderDetail.totalPrice,
                            store: item.store.name,
                        }
                    })
                }
            })
        }
    },

    async updateOrder(ctx, next){
        const payload = await strapi.service('api::order.order').updateOrder();
        ctx.body = payload
    },
    async updateDeliveryStatus(ctx, next){
        const body = ctx.request.body;
        const payload = await strapi.service('api::order.order').updateDeliveryStatus(body);
        ctx.body = payload;
    },

}));
