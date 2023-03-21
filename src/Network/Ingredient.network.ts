import { privateRequest, publicRequest } from "../Config/axios.config";
import { IIngredient, IIngredientCreateUpdate } from "../types/ingredient.type";

/* ingredient */
export const ingredients = async () => {
  return await privateRequest.get(`/product/api/v1/ingredient`);
};

/* ingredient create */
export const ingredientCreate = async (data: IIngredientCreateUpdate) => {
  return await privateRequest.post(`/product/api/v1/ingredient`, data);
};

/* ingredient destory */
export const ingredientDestroy = async (id: string) => {
  return await privateRequest.delete(`/product/api/v1/ingredient/${id}`);
};
