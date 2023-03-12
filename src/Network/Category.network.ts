import { privateRequest, publicRequest } from "../Config/axios.config";
import { ICategoryCreateUpdate } from "../types/category.type";

/* categoires */
export const categoires = async () => {
  return await privateRequest.get(`/product/api/v1/category`);
};

/* category create */
export const categoryCreate = async (data:ICategoryCreateUpdate) => {
  return await privateRequest.post(`/product/api/v1/category`, data);
};
