import { privateRequest } from "../Config/axios.config";
import { IVariantCreateUpdate } from "../types/variant.type";

/* resource list */
export const variantList = async () => {
  return await privateRequest.get(`product/api/v1/variant`);
};

/* reosurce store */
export const variantStore = async (data: IVariantCreateUpdate) => {
  return await privateRequest.post(`product/api/v1/variant`, data);
};

/* specific resource show */
export const variantShow = async (_id: string) => {
  return await privateRequest.get(`product/api/v1/variant/${_id}`);
};

/* reosurce store */
export const variantUpdate = async (
  data: IVariantCreateUpdate,
  _id: string
) => {
  return await privateRequest.put(`product/api/v1/variant/${_id}`, data);
};

/* resource destory */
export const variantDestory = async (_id: string) => {
  return await privateRequest.delete(`product/api/v1/variant/${_id}`);
};
