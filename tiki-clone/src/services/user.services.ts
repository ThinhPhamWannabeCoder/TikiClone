import {axiosProtected, axiosMultiPartProtected} from "../config/axios.protected";


const userApi ={
    product: async ()=>await axiosProtected.get('/products'),
    user: async () => await axiosProtected.get('/users/me?populate[0]=role'),
    get_info_user: async (id:number) => await axiosProtected.get(`/infomation-users/${id}?populate=*`),
    uploadFile: async (file: FormData) => await axiosMultiPartProtected.post(`/upload`, file),
    put_info_user: async(id:number,form:any) => await axiosProtected.put(`/info/infomation-users/${id}`, form),
}
export default userApi