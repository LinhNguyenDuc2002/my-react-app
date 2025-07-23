import axios, { type AxiosInstance } from 'axios';
import { ENV_BASE_API, HEADER_PARAMS } from '../../utils/constants';

const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: `${ENV_BASE_API}`,
    headers: {
        [HEADER_PARAMS.CONTENT_TYPE]: 'application/json',
    },
});

export default defaultAxiosInstance;