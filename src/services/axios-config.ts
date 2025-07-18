import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import config from "./app-config";
import {
  getLocalStorage,
  saveLocalStorage,
  clearLocalStorage,
} from "./formats";
import routes from "@/lib/routes";
import { useNavigator } from "@/hooks/use-navigation";

const baseURL = config.baseUrl;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const refreshToken = async (originalRequest: AxiosRequestConfig) => {
  try {
    const token = getLocalStorage(config.tokenKey);
    const url = `${baseURL}/Account/refresh-token?token=${token?.refreshToken}`;

    const { data, ...response } = await axios.post(url);

    if (data.status === 200) {
      // old request and save new token
      saveLocalStorage(data, config.tokenKey);

      if (originalRequest && originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${data?.jwToken}`;
      }

      axios(originalRequest).then(onResponse).catch(onResponseError);

      return { data, ...response };
    }

    // window.location.href = `${routes.auth.logout.path}?next=${window.location.pathname}`;
    clearLocalStorage(config.tokenKey);
    useNavigator(`${routes.auth.login.path}`);
    return await Promise.reject(response);
  } catch (error) {
    // TODO: Logout user
    // delete
    clearLocalStorage(config.tokenKey);
    setTimeout(() => {
      useNavigator(`${routes.auth.login.path}`);
      // window.location.href = `${routes.auth.login.path}?next=${window.location.pathname}`;
    }, 1000);
    return await Promise.reject(error);
  }
};

const onRequest = (
  request: AxiosRequestConfig
): InternalAxiosRequestConfig<any> => {
  const token = getLocalStorage(config.tokenKey);
  if (!request.headers) return request as InternalAxiosRequestConfig<any>;

  request.headers.Authorization = `Bearer ${token?.jwToken || ""}`;

  return request as InternalAxiosRequestConfig<any>;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError | any) => {
  const originalRequest: any = error.config;
  const statusCode = error.response!.status;

  if (statusCode === 401) {
    const response = await refreshToken(originalRequest);
    return response;
  }

  return await Promise.reject(error?.response?.data || error.message);
};

// https://axios-http.com/docs/interceptors
axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
