import { publicRequest } from "../Config/axios.config";

/* Login request */
type LoginDataType = {
  email: string;
  password: string;
};
 
export const login = async (data: LoginDataType) => {
  return await publicRequest.post(`/api/v1/user/auth/login`, data);
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
