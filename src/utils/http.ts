import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { message } from "antd";
axios.defaults.baseURL = "";
axios.defaults.timeout = 15000;

// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    return config;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (res: AxiosResponse): any => {
    if (
      res.data.meta.status !== 200 &&
      res.data.meta.status !== 201 &&
      res.data.meta.status !== 204
    ) {
      message.error(res.data.meta.msg);
    } else {
      message.success(res.data.meta.msg);
    }
    return res;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

interface DataType {
  [key: string]: any;
}

// 封装的http请求
let http = (
  url: string,
  method: Method = "GET",
  data: DataType | null = null,
  headers: any = { "content-type": "application/json" }
): Promise<any> => {
  return axios({
    url,
    method,
    data: method !== "GET" ? data : null,
    params: method == "GET" ? data : null,
    headers,
  });
};

export default http;
