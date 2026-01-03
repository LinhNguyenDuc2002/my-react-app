import type { AxiosInstance } from "axios";
import axios from "axios";
import { ENV_BASE_IDENTIFY_PROVIDER_URL, HEADER_PARAMS } from "../../utils/constants";

const identifyProviderInstance: AxiosInstance = axios.create({
    baseURL: ENV_BASE_IDENTIFY_PROVIDER_URL,
    headers: {
        [HEADER_PARAMS.CONTENT_TYPE]: 'application/x-www-form-urlencoded',
    },
});

export default identifyProviderInstance;