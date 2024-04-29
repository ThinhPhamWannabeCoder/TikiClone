/**
 * address service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::address.address',({strapi})=>({
    getByUserId:async (userId: number, option: boolean)=>{
        const queryOptions:any = {
            fields: ["type", "address", "contact_name", "contact_mobile","default"],
            populate:{
                ward:{
                    fields: ["name"],
                    populate: {
                        district: {
                            fields: ["name"],
                            populate:{
                                city:{
                                    fields: ["name"]
                                }
                            }
                        }
                    }
                }
            },

            filters:{
                user: {
                    id: userId
                }
            }
        }
        if(option) {
            queryOptions.filters["default"] = option
            
        }
        const data  = await strapi.entityService.findMany('api::address.address',queryOptions)
        return data
    },

    createNew: async(body)=>{
        const {userId, wardId, districtId, cityId, address, name, mobile, type, option} = body;
        if(option=="true"){
            console.log("TO DO")
            const ids = await strapi.db.query("api::address.address").updateMany({
                // where: {
                //     user: userId,
                // },
                data: {
                    default: "false"
                },
              });
            console.log(ids)
        }
        const newAddressId = await strapi.entityService.create("api::address.address", {
            data:{
                user: userId,
                address: address,
                contact_name: name,
                contact_mobile: mobile,
                ward: wardId,
                type: type,
                publishedAt: Date.now(),
                default: option

            },
            fields: ["id"]
        })
        
        return newAddressId

    },
    deleteById: async (id: number)=>{
        const deleteId = await strapi.entityService.delete("api::address.address",id)
        return  deleteId

    },
    updateById: async (id: number, body)=>{
        const {userId, wardId, districtId, cityId, address, name, mobile, type, option} = body;
        if(option=="true"){
            console.log("TO DO")
            const ids = await strapi.db.query("api::address.address").updateMany({
                // where: {
                //     user: userId,
                // },
                data: {
                    default: "false"
                },
              });
            console.log(ids)
        }
        const updatedId = await strapi.entityService.update("api::address.address", id, {
            data:{
                user: userId,
                address: address,
                contact_name: name,
                contact_mobile: mobile,
                ward: wardId,
                type: type,
                default: option
                // publishedAt: Date.now(

            },
            fields: ["id"]
        })

        return updatedId

    }
}));

