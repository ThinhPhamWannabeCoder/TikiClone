
// Tat ca se dung chung tren axios.get(/product/get-all?) r

import { axiosAdmin } from "../config/axios.admin";
import axiosPublic from "../config/axios.public";
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
    getCategory: async (category_id: number,) => await axiosAdmin.get(`/product-categories/${category_id}`),
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
    // updateCartByCartId: async (data: {cartId: number, newQuantity: number}) => await axiosAdmin.patch(`carts/products/${}`)
    // deleteCartByProductId: async (data: {cartId: number}) => await axiosAdmin.delete(`/carts/products/${data.productId}`),
    // deleteCartAll: async (data:{userId: number}) => await axiosAdmin.delete(`carts/user/${data.userId}`),
    // deleteCartAllStore: async (data:{userId:number, storeId: number}) => await axiosAdmin.patch(`carts/user/${userId}/store/${storeId})
    // =============== ORDER =============== //
    // postOrder => Tao order moi



    // =============== DELIVERY =============== //
    getDeliveries: async () => await axiosAdmin.get(`/deliveries`),
    // =============== USER ADDRESSS =============== //
    getAddress: async (userId : number) => await axiosAdmin.get(`/addresses/user/${userId}`)


    
}
export default productApi
// Co job de customize strapi roi
// Truoc mat la fake du lieu do