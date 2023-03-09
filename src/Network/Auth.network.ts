import { publicRequest } from "../Config/axios.config";
import { ILogin } from "../types/auth.type";


export const login = async (data: ILogin) => {
  return await publicRequest.post(`/auth/api/v1/admin/login`, data);
};

/* Register request */
type RegisterDataType = {
  email: string;
  password: string;
};

export const register = async (data: RegisterDataType) => {
  return await publicRequest.post(`/api/v1/user/auth/registrar`, data);
};

/* Reset request */
type ResetDataType = {
  email: string;
  new_password: string;
};

export const reset = async (data: ResetDataType) => {
  return await publicRequest.post(`/api/v1/user/auth/reset`, data);
};
