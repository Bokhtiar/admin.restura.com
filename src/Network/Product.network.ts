import { IProductCreateUpdate, IProduct } from "../types/product.type";
import { privateRequest, publicRequest } from "../Config/axios.config";

/* resoruce list */
export const productList = async () => {
  return await privateRequest.get(`product/api/v1/product`);
};

/* resource store */
export const productStore = async (data: IProductCreateUpdate) => {
  return await privateRequest.post(`product/api/v1/product`, data);
};

/* resource store */
export const productUpdate = async (
  data: IProductCreateUpdate,
  _id: string
) => {
  return await privateRequest.put(`product/api/v1/product/${_id}`, data);
};

/* specific reosurce show */
export const productShow = async (_id: string) => {
  return await privateRequest.get(`product/api/v1/product/${_id}`);
};

/* reosurce destory */
export const productDestroy = async (_id: string) => {
  return await privateRequest.delete(`product/api/v1/product/${_id}`);
};
