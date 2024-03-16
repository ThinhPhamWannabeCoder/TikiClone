import {axiosProtected, axiosMultiPartProtected} from "../config/axios.protected";


const userApi ={
    product: async ()=>await axiosProtected.get('/products'),
    user: async () => await axiosProtected.get('/users/me?populate=*'),
    get_info_user: async (id:number) => await axiosProtected.get(`/infomation-users/${id}?populate=*`),
    uploadFile: async (form: FormData) => await axiosMultiPartProtected.post(`/upload`, form),
    deleteFie: async (id:number) => await axiosProtected.delete(`/upload/files/${id}`),
    put_info_user: async(id:number,data:any) => await axiosProtected.put(`/infomation-users/${id}`, data),
    put_user: async(id: number, data:any)=> await axiosProtected.put(`/users/${id}`, data),
    // get_user_noti: async()
}
export default userApi