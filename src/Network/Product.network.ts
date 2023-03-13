import { IProductCreateUpdate, IProduct } from "../types/product.type";
import { privateRequest, publicRequest } from "../Config/axios.config";

/* resoruce list */
export const productList = async() => {
    return await privateRequest.get(`product/api/v1/product`);
}

/* resource store */
export const productStore = async(data:IProductCreateUpdate) => {
    return await privateRequest.post(`product/api/v1/product`, data)
}

/* reosurce destory */
export const productDestroy = async(_id:string) => {
    return await privateRequest.delete(`product/api/v1/product/${_id}`)
}