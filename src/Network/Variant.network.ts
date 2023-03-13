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

/* */
export const variantDestory = async (_id: string) => {
  return await privateRequest.delete(`product/api/v1/variant/${_id}`);
};
