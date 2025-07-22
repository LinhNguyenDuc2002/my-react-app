import axios, { type AxiosInstance } from 'axios';
import { ENV_BASE_API, HEADER_PARAMS } from '../utils/constants';
import { useAction } from './common';

const instance: AxiosInstance = axios.create({
    baseURL: `${ENV_BASE_API}/api/user-service/oauth2/token`,
    timeout: 10000,
    headers: {
        [HEADER_PARAMS.CONTENT_TYPE]: 'application/x-www-form-urlencoded',
        [HEADER_PARAMS.X_ORIGIN]: 'abc'
    },
});

export const useAuthenAction = () => {
    return useAction('POST', instance);
}