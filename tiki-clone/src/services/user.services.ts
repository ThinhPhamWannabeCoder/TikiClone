import axiosProtected from "../config/axios.protected";


const userApi ={
    product: async ()=>await axiosProtected.get('/products'),
    user: async () => await axiosProtected.get('/users/me?populate=*'),
    info_user: async (id:number) => await axiosProtected.get(`/infomation-users/${id}?populate=*`)
}
export default userApi