import { privateRequest, publicRequest } from "../Config/axios.config";
import { ICategoryCreateUpdate } from "../types/category.type";

/* categoires */
export const categoires = async () => {
  return await privateRequest.get(`/product/api/v1/category`);
};

/* category create */
export const categoryCreate = async (data: ICategoryCreateUpdate) => {
  return await privateRequest.post(`/product/api/v1/category`, data);
};

/* specific resource */
export const categoryShow = async (_id: string) => {
  return await privateRequest.get(`/product/api/v1/category/${_id}`);
};

/* resource updated */
export const categoryUpdate = async (
  data: ICategoryCreateUpdate,
  _id: string
) => {
  return await privateRequest.put(`/product/api/v1/category/${_id}`, data);
};

/* resource updated */
export const categoryDelete = async (_id: string) => {
  return await privateRequest.delete(`/product/api/v1/category/${_id}`);
};
