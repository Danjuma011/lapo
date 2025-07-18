import axios from "axios";
import config from "../app-config";
import axiosInstance from "../axios-config";

const { baseUrl } = config;

interface Request {
  url: string;
  body?: any;
  auth?: boolean;
  paginate?: boolean;
  [x: string]: any;
}

interface CustomAxiosResponse {
  data: any;
  firstPage: string;
  lastPage: string;
  nextPage: null | number;
  pageNumber: number;
  pageSize: number;
  previousPage: null | number;
  totalPages: number;
  totalRecords: number;
}

const del = async ({ url, body: data }: Request) =>
  (
    await axiosInstance.delete(url, {
      data,
    })
  ).data;

const get = async ({ url, auth = true, paginate = false }: Request) => {
  const response = await (auth
    ? axiosInstance.get(url)
    : axios.get(baseUrl + url));
  const data = response.data;
  return paginate
    ? {
        data: data.data,
        totalPages: data?.totalPages,
        totalItems: data?.totalRecords,
      }
    : data.data;
};

const getWithMeta = async ({ url, auth = true }: Request) => {
  const response: CustomAxiosResponse = await (auth
    ? axiosInstance.get(url)
    : axios.get(baseUrl + url));
  const returnData: any = {
    data: response.data.data,
    meta: {
      pageNumber: response.data.pageNumber,
      pageSize: response.data.pageSize,
      firstPage: response.data.firstPage,
      lastPage: response.data.lastPage,
      totalPages: response.data.totalPages,
      totalRecords: response.data.totalRecords,
      nextPage: response.data.nextPage,
      previousPage: response.data.previousPage,
    },
  };
  return returnData;
};

const post = async ({ url, body, auth = true, options = {} }: Request) => {
  return (
    await (auth
      ? axiosInstance.post(url, body, options)
      : axios.post(baseUrl + url, body))
  ).data.data;
};

const patch = async ({ url, body }: Request) =>
  (await axiosInstance.patch(url, body)).data.data;

const put = async ({ url, body }: Request) =>
  (await axiosInstance.put(url, body)).data.data;

const api = {
  delete: del,
  get,
  getWithMeta,
  patch,
  post,
  put,
};

export default api;
