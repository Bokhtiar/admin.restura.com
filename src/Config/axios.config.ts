import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../utils/helper";

const apiUrl = process.env.REACT_APP_API_ENDPOINT || "http://localhost:4000";
const apiKey = process.env.REACT_APP_API_KEY || "5267556B58703273357638792F423F45";

/* Publica/Common request config */
axios.defaults.headers.post["Content-Type"] = "application/json";

const publicRequest = axios.create({
  baseURL: apiUrl,
});

const privateRequest = axios.create({
  baseURL: apiUrl,
});

/* Public request config */
publicRequest.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    config.headers["api_key"] = apiKey;
    return config;
  },
  (err: any) => {
    console.log(err);
    Promise.reject(err);
  }
);
 
/* Private request config */
privateRequest.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await getToken();
    if (config.headers === undefined) {
      config.headers = {};
    }
    if (token) {
      config.headers["api_key"] = apiKey;
      config.headers["Authorization"] = "Bearer " + token || "";
    }
    return config;
  },
  (err: any) => {
    console.log(err);
    Promise.reject(err);
  }
);

export { publicRequest, privateRequest };
