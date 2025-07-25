import axios, { type AxiosInstance } from 'axios';
import { ENV_BASE_API, HEADER_PARAMS } from '../utils/constants';
import { useAction } from './common';
import { type Oauth2Form, type Oauth2Response } from '../types/authentication';

const instance: AxiosInstance = axios.create({
    baseURL: `${ENV_BASE_API}/api/user-service/oauth2/token`,
    headers: {
        [HEADER_PARAMS.CONTENT_TYPE]: 'application/x-www-form-urlencoded',
        [HEADER_PARAMS.X_ORIGIN]: 'abc'
    },
});

export const useAuthenAction = () => {
    return useAction<Oauth2Form, Oauth2Response>('POST', instance);
}