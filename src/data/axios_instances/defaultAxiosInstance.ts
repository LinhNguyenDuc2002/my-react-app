import axios, { type AxiosInstance } from 'axios';
import { ENV_BASE_API, HEADER_PARAMS } from '../../utils/constants';

const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: `${ENV_BASE_API}`,
    headers: {
        [HEADER_PARAMS.CONTENT_TYPE]: 'application/json',
        [HEADER_PARAMS.AUTHORIZATION]: `Bearer ${sessionStorage.getItem('access_token')}`,
    },
});

export default defaultAxiosInstance;