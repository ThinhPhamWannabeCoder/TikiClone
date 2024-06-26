/**
 * product service
 */
interface Product{
    id: number,
    name: string,
    category_name: string,
    category_id: number,
    subcategory_name: string,
    subcategory_id: number,
}
interface result{
    products: Product[],
    total: number,
    currentPage: number,
}
interface allProduct{
    category_id?: number,
    subcategory_id?: number,
    price_range?: string,
    best_seller?: boolean,
    new_product?: boolean,
    sort?: string,
    limit?: number,
    current_page?: number
}
interface Filters {
    Inventory: {
        $gt: number;
    };
    product_sub_category?: {
        product_category:{
            id: number
        }
    }
    price?: {
        $between: [number, number];
    };
}
const limitList = 30;
const limitNav = 6;
const current_pageDefault = 1

import { factories } from '@strapi/strapi';
//@ts-ignore
export default factories.createCoreService('api::product.product',({strapi})=>({
    getAllHome: async (options: {
        best_seller: boolean;
        limit: number;
        current_page: number;
    }) => {
        const queryOptions: any = {
            fields: ['id', 'name', 'price', 'Inventory'],
            populate: {
             
                primary_image: {
                    fields: ['id', 'url']
                }
            },
            start: (options.current_page  - 1) * options.limit,
            limit: options.limit,
            filters: {
                price: {
                    $gte: 0
                },
                Inventory: {
                    $gt: 0
                },
                publishedAt:{
                    $notNull: true,
                }

            }
        };
        if (options.best_seller) {
            queryOptions.sort = [{ price: 'desc' }, { Inventory: 'desc' },{createdAt: "desc"}];
        }
        return await strapi.entityService.findMany('api::product.product', queryOptions);
    },
    getAllCategory: async (options: 
        {
            category_id: number, 
            best_seller: boolean, 
            price_range?: string,
            limit: number, 
            current_page: number,
            new_product: boolean,
            sort?: string,
        }
    ) => {
        // DONE
        let filters: any = {
            Inventory: {
                $gt: 0
            },
           
            $or: [
                {categories:{id: options.category_id}},
                {categories:{parent: options.category_id}}
            ],
            
            publishedAt:{
                $notNull: true,
            }
        };
        if(options.price_range){
            const priceArray = options.price_range.split('-');
            console.log(options.price_range);
            const priceFrom = parseFloat(priceArray[0]);
            const priceTo = parseFloat(priceArray[1]);
            if(priceTo == 0){
                filters.price = {
                    $gte: priceFrom
                };
            }
            else{
                filters.price = {
                    $between: [priceFrom, priceTo]
                };
            }
            
        }

        const queryOptions: any = {
            fields: ['id', 'name', 'price', 'Inventory'],
            populate: {
                primary_image: {
                    fields: ['id', 'url']
                }
            },
            start: (options.current_page - 1) * options.limit,
            limit: options.limit ,
            filters: filters
        };
        if (options.sort) {
            const option = options.sort.split(':')
            queryOptions.sort = [{ price: option[1] }, { Inventory: 'desc' }];
            console.log(option)
        }
        if (options.best_seller) {
            queryOptions.sort = [{ price: 'desc' }, { Inventory: 'desc' }];
        }
        if (options.new_product){
            queryOptions.sort =  [{createdAt: "desc"},{ price: 'desc' }, { Inventory: 'desc' }];
        }

        return await strapi.entityService.findMany('api::product.product', queryOptions);

    },
    getBestByCategory: async (
        
        options: 
        {
            category_id: number, 
            limit: number, 
            current_page: number,
        }
    ) =>{
        // DONE
        console.log("Debugging");

        let filters: any = {
            Inventory: {
                $gt: 0
            },
            categories:{
                id: options.category_id
            }
            // product_sub_category: {
            //     product_category:{
            //         id: options.category_id
            //     }
            // }
        };
        const queryOptions: any = {
            fields: ['id', 'name', 'price', 'Inventory'],
            populate: {
                // product_sub_category: {
                //     fields: ['id', 'name'],
                //     populate: {
                //         product_category: {
                //             fields: ['id', 'name']
                //         }
                //     }
                // },
                primary_image: {
                    fields: ['id', 'url']
                }
            },
            start: (options.current_page- 1) * options.limit,
            limit: options.limit ,
            sort: [{price: 'desc'},{Inventory: 'asc'}],
            filters: filters,
        };
        return await strapi.entityService.findMany('api::product.product', queryOptions);

    },
    getAllSubCategory: async (options: 
        {
            subcategory_id: number, 
            best_seller: boolean, 
            price_range?: string,
            limit: number, 
            current_page: number,
            new_product?: boolean,
            sort?: string,
        }
    ) => {
        // DONE
        let filters: any = {
            Inventory: {
                $gt: 0
            },
            // product_sub_category: {
            //     id: 2
            // }
        };
        if(options.price_range){
            const priceArray = options.price_range.split('-');
            filters.price = {
                $between: [parseFloat(priceArray[0]), parseFloat(priceArray[1])]
            };
        }
        const queryOptions: any = {
            fields: ['id', 'name', 'price', 'Inventory'],
            populate: {
                // product_sub_category: {
                //     fields: ['id', 'name'],
                //     populate: {
                //         product_category: {
                //             fields: ['id', 'name']
                //         }
                //     }
                // },
                primary_image: {
                    fields: ['id', 'url']
                }
            },
            // start: (options.current_page || current_pageDefault - 1) * options.limit||limitList,
            // limit: options.limit ||limitList,
            start: (options.current_page - 1) * options.limit,
            limit: options.limit,
            filters: filters
        };
        if (options.sort) {
            const option = options.sort.split(':')
            queryOptions.sort = [{ price: option[1] }, { Inventory: 'desc' }];
        }
        if (options.best_seller) {
            queryOptions.sort = [{ price: 'desc' }, { Inventory: 'desc' }];
        }
        if (options.new_product){
            queryOptions.sort =  [{createdAt: "desc"},{ price: 'desc' }, { Inventory: 'desc' }];
        }
        return await strapi.entityService.findMany('api::product.product', queryOptions);
    },
    getBestBySubCategory: async (
        options: 
        {
            subcategory_id: number, 
            limit: number, 
            current_page: number,
        }
    ) =>{
        const queryOptions: any = {
            fields: ['id', 'name', 'price', 'Inventory'],
            populate: {
                // product_sub_category: {
                //     fields: ['id', 'name'],
                //     populate: {
                //         product_category: {
                //             fields: ['id', 'name']
                //         }
                //     }
                // },
                primary_image: {
                    fields: ['id', 'url']
                }
            },
            // start: (options.current_page - 1) * options.limit,
            // limit: options.limit,
            start: (options.current_page - 1) * 2,
            limit: options.limit,
            sort: [{price: 'desc'},{Inventory: 'desc'}],
            filters: {
                Inventory: {
                    $gt: 0
                },
                // product_sub_category: {
                //     id: options.subcategory_id
                // }
            },
        };
        // console.log(await strapi.entityService.findMany('api::product.product', queryOptions));
        return await strapi.entityService.findMany('api::product.product', queryOptions);

    },

    getProductById: async (product_id: number) =>{
        // Phai hanlde phai nay tuong doi ki
        // const queryOptions: any = {
        //     fields: ['id', 'name', 'price', 'Inventory'],
        //     populate: {
        //         product_sub_category: {
        //             fields: ['id', 'name'],
        //             populate: {
        //                 product_category: {
        //                     fields: ['id', 'name']
        //                 }
        //             }
        //         },
        //         primary_image: {
        //             fields: ['id', 'url']
        //         },
        //         product_images:{
        //             fields: ['id','url']
        //         }
        //     },
        // };
        // await strapi.entityService.findOne('api::product.product', product_id ,queryOptions);
        const data = await strapi.entityService.findOne('api::product.product', product_id,{
            populate: '*'
        });
        // console.log(data.product_images.map(image => image.url))
        // const subcategory = await strapi.entityService.findOne('api::product-sub-category.product-sub-category',data.product_sub_category.id,{
        //     populate : '*'
        // })
        // primary_image: data.primary_image.url,
        const secondary_images =  data.product_images.map(image => image.url);
        secondary_images.unshift(data.primary_image.url)
        // const product_images 

        // Bo sung thong tin store
        const payload = {
            id: data.id,
            name: data.name,
            price: data.price,
            store: {
                id: data.store.id,
                name: data.store.name
            },
            // STORE
            // store_id:{
            //     store_id,
            //     store_image,
            //     store_short_info
            // }
            // DELIVERY
            delivery: {
                weight: data.weight,
                weight_unit: data.weight_unit.name,
                // conversion
                depth: data.depth,
                depth_unit: data.depth_unit.name ,
                // conversion
                length: data.length,
                length_unit: data.length_unit.name,
                // conversion
                width: data.width,
                width_unit: data.width_unit.name
                // conversion
            },
            material: data.product_material.name,
            color: data.product_color.color,

            
            desc: data.description,
            // detailDesc: data.detailDesc,
            // primary_image: data.primary_image.url,
            // secondary_images: data.product_images.map(image => image.url),


            product_images:secondary_images,
            // product_sub_category:{
            //     id: data.product_sub_category.id,
            //     name: data.product_sub_category.name,
            //     product_category:{
            //         id: subcategory.product_category.id,
            //         name: subcategory.product_category.name,
            //     }
            // }

        }
        return payload;
    },
    
}));
