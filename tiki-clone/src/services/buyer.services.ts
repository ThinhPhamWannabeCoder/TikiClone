
// Tat ca se dung chung tren axios.get(/product/get-all?) r

import { axiosAdmin } from "../config/axios.admin";
import axiosPublic from "../config/axios.public";
import { OrderPayload, PostAddress } from "../types/user.types";
type BooleanLiteral = "true" | "false";

// Xong roi filter tren day
const productApi ={
    // Filter on Category
    // Filter on SubCategory
    // Get product on ...
    // Get Top Category
    // Get top Product
    // Get Recommended Product
    // Get product by fiter
    // Get random product
    
    // =============== HOME =============== //
    getHomeProduct: async (data : {best_seller: BooleanLiteral, limit: number, current_page: number})  => await axiosAdmin.get(`products/getAll?best_seller=${data.best_seller}&limit=${data.limit}&current_page=${data.current_page}`),
    getHomeBestProductByCategory: async (data: {category_id: number, limit: number,current_page:number}) => await axiosAdmin.get(`products/getAll?category_id=${data.category_id}&limit=${data.limit}&current_page=${data.current_page}`),

    // =============== CATEGORY =============== //
    getCategory: async (parent?: number,) => await axiosAdmin.get(`/categories${parent ? `?parent=${parent}`:''}`),

    getCategoryNav : async () => await axiosAdmin.get("/product-categories/nav"),
    getCategoryBestFilter: async () => await axiosAdmin.get("/product-categories/best"),
    getCategoryTopFilter: async () => await axiosAdmin.get("/product-categories/top"),

    getCategoryProduct: async (data : {category_id: number, best_seller: BooleanLiteral, new_product: BooleanLiteral, price_range: string, limit: number,current_page:number, sort: string}) => await axiosPublic.get(`products/get-all?category_id=${data.category_id}&new_product=${data.new_product}&price_range=${data.price_range}&sort=${data.sort}&best-seller=${data.best_seller}&limit=${data.limit}}&current_page=${data.current_page}`),
    getCategoryBestProductBySubCategory: async (data :{subcategory_id: number, limit: number,current_page:number}) => await axiosAdmin.get(`products/getAll?subcategory_id=${data.subcategory_id}&limit=${data.limit}&current_page=${data.current_page}`),
    // =============== SUB-CATEGORY =============== //
    getSubCategory: async (subcategory_id: number,) => await axiosAdmin.get(`/product-sub-categories/${subcategory_id}`),
    getSubCategoryNav : async (category_id : number) => await axiosAdmin.get(`/product-sub-categories/${category_id}/nav`),
    getSubCategoryBestFilter: async (category_id : number) => await axiosAdmin.get(`/product-sub-categories/${category_id}/best`),
    getSubCategoryTopFilter: async (category_id : number) => await axiosAdmin.get(`/product-sub-categories/${category_id}/top`),

    getSubcategoryProduct: async (data: {subcategory_id: number, limit: number,current_page:number}) => await axiosPublic.get(`products/get-all?subcategory_id=${data.subcategory_id}&limit=${data.limit}&current_page=${data.current_page}`),
    // =============== PRODUCT =============== //

    getProductById: async (product_id:number) => await axiosAdmin.get(`products/${product_id}`),


    // =============== PROMOTION =============== //
    getPromotionBanner: async () => await axiosAdmin.get('/promotions'),

    // =============== STORE =============== //
    getStoreShortById: async (storeId: number) => await axiosAdmin.get(`/stores/short/${storeId}`),

    // =============== CART =============== //
    getUserCart: async (data: {userId : number}) => await axiosAdmin.get(`carts/user/${data.userId}`),
    deleteByIds: async (data: {ids: number[]}) => await axiosAdmin.post(`carts/delete`,data),
    updateCartByCartId: async (data: {cartId: number, quantity: number}) => await axiosAdmin.post(`carts/update?id=${data.cartId}&quantity=${data.quantity}`),
    addToCart: async(data:{userId: number, productId: number, quantity: number}) => await axiosAdmin.post(`carts`, data),
    // =============== ORDER =============== //
    createOrders: async (data:OrderPayload) => await axiosAdmin.post(`orders`,data),



    // =============== DELIVERY =============== //
    getDelivery: async () => await axiosAdmin.get(`/deliveries/default`),
    getDeliveries: async () => await axiosAdmin.get(`/deliveries`),

    // =============== USER ADDRESSS =============== //
    getAddress: async (data: {userId : number, default: boolean }) => await axiosAdmin.get(`/addresses/user/${data.userId}?main=${data.default}`),
    createAddress: async(data: PostAddress)=> await axiosAdmin.post('/addresses', data),
    deleteAddress: async(data : number)=> await axiosAdmin.delete(`/addresses/${data}`),
    updateAddress: async(data :{addressId: number, body: PostAddress}) => await axiosAdmin.post(`/addresses/update/${data.addressId}`, data.body),

    // FOR CREATE NEW AND UPDATE ADDRESS
        // FILTERING
    getCities: async(data: {district?: number}) => await axiosAdmin.get(`/cities${data.district? `?district=${data.district}`:''}`),
    getDistricts: async(data: {ward?: number, city?: number}) => await axiosAdmin.get(`/districts${(data.ward && data.city) ? `?city=${data.city}&ward=${data.ward}`:  (data.city ? `?city=${data.city}`: (data.ward ? `?ward=${data.city}`:''))}`),
    // getFilterDistricts: async(data: {city: number,}) => await axiosAdmin.get('/districts'),
    getWards: async(data:{district?:number}) => await axiosAdmin.get(`/wards${data.district? `?district=${data.district}`:''}`),

    // updateAddress: async(data: {body: PostAddress, id: number}) => await axiosAdmin.post(`/addresses/update/${data.id}`,data.body),
    // =============== USER PAYMENT =============== //
    getPayments: async () => await axiosAdmin.get(`/payment-options`),

    // =============== PAST ORDER =============== //
    getPastOrderHeader: async () => await axiosAdmin.get(`order-statuses`),
    getAlPastOrderItems: async (data: {userId: number}) => await axiosAdmin.get(`orders/buyer/${data.userId}`),
    getAlPastOrderItemsByStatus: async (data: {userId: number, status: number}) => await axiosAdmin.get(`orders/buyer/${data.userId}?status=${data.status}`),



    
}
export default productApi
// Co job de customize strapi roi
// Truoc mat la fake du lieu do