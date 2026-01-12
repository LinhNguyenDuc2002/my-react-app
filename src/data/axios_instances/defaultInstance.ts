import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { ENV_BASE_API, ENV_CLIENT_ID, ENV_CLIENT_SECRET, GRANT_TYPE, HEADER_PARAMS, HTTP_STATUS_CODE } from '../../utils/constants';
import { ROUTE_CONSTANTS } from '../../routes/RouteConstant';
import type { Oauth2Form, Oauth2Response } from '../../types/authentication';
import identifyProviderInstance from './identifyProviderInstance';
import handleResponse from '../../utils/handleResponse';

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
    else {
      window.location.href = ROUTE_CONSTANTS.login;
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
  async (error: AxiosError) => {
    const { response, config } = error;

    if (response) {
      if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED && config) {
        console.log("OK1")
        try {
          const refreshToken = sessionStorage.getItem('refresh_token');

          if(refreshToken) {
            const formData: Oauth2Form = {
              client_id: ENV_CLIENT_ID,
              client_secret: ENV_CLIENT_SECRET,
              grant_type: GRANT_TYPE.REFRESH_TOKEN,
              refresh_token: refreshToken,
            }

            const newTokenResponse: Oauth2Response = await identifyProviderInstance.post<Oauth2Response>('/realms/my-realm/protocol/openid-connect/token', formData).then(handleResponse);
            sessionStorage.setItem('access_token', newTokenResponse.access_token);
            sessionStorage.setItem('refresh_token', newTokenResponse.refresh_token);

            config.headers[HEADER_PARAMS.AUTHORIZATION] = `Bearer ${newTokenResponse.access_token}`;
            return defaultInstance(config);
          }
          else {
            window.location.href = ROUTE_CONSTANTS.login;
            return Promise.reject('Unauthorized, redirecting to login...');
          }
        } 
        catch (refreshError) {
          console.error('Failed to refresh token', refreshError);
          window.location.href = ROUTE_CONSTANTS.login;
          return Promise.reject('Unauthorized, redirecting to login...');
        }
      } 
      else {
        console.error('Error: An error occurred');
        return Promise.reject('An error occurred');
      }
    } 
    else {
      console.error('Network error:', error.message);
      // return Promise.reject('Network error, please try again!');
    }
  }
);

export default defaultInstance;