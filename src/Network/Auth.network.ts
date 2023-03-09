import { privateRequest, publicRequest } from "../Config/axios.config";
import { ILogin, IRegister } from "../types/auth.type";

/* login */
export const login = async (data: ILogin) => {
  return await publicRequest.post(`/auth/api/v1/admin/login`, data);
};

/* register */
export const registrasion = async (data: IRegister) => {
  return await publicRequest.post(`/auth/api/v1/admin`, data);
};

/* profile */
export const profile = async () => {
  return await privateRequest.get(`/auth/api/v1/admin/me`);
};
