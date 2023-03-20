import { privateRequest, publicRequest } from "../Config/axios.config";
import { IIngredient } from "../types/ingredient.type";

/* ingredient */
export const ingredients = async () => {
  return await privateRequest.get(`/product/api/v1/ingredient`);
};
