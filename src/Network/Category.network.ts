import { privateRequest, publicRequest } from "../Config/axios.config";


/* categoires */
export const categoires = async () => {
  return await privateRequest.get(`/product/api/v1/category`);
};