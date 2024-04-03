/**
 * store service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::store.store',({strapi})=>({
    getShort: async (storeId: number) => {
        const data = await strapi.entityService.findOne('api::store.store', storeId,{
            populate: '*'
        });
        const payload = {
            name: data.name,
            avatar: data.avatar.url,
            shortIntro: "Hãy là khách hàng đầu tiên"
        }
        return payload;
    }
}));
