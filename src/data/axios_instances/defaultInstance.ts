import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { ENV_BASE_API, HEADER_PARAMS, HTTP_STATUS_CODE } from '../../utils/constants';

const defaultInstance: AxiosInstance = axios.create({
  baseURL: `${ENV_BASE_API}`,
  headers: {
      [HEADER_PARAMS.CONTENT_TYPE]: 'application/json',
  },
});

defaultInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem('access_token');
    
    if (token) {
      config.headers[HEADER_PARAMS.AUTHORIZATION] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

defaultInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;

    if (response) {
      if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        // window.location.href = ROUTE_CONSTANTS.login;
        return Promise.reject('Unauthorized, redirecting to login...');
      } else {
        // console.error('Error:', response.data.message || 'An error occurred');
        // return Promise.reject(response.data.message || 'An error occurred');
      }
    } else {
      console.error('Network error:', error.message);
      return Promise.reject('Network error, please try again!');
    }
  }
);

export default defaultInstance;