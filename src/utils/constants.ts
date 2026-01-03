import enUS from 'antd/lib/locale/en_US';
import viVN from 'antd/lib/locale/vi_VN';

export const LOCALE = {
    EN: enUS,
    VI: viVN
}

export const HEADER_PARAMS = {
    CONTENT_TYPE: 'Content-Type',
    ACCEPT_LANGUAGE: 'Accept-Language',
    X_ORIGIN: 'X-Origin',
    AUTHORIZATION: 'Authorization',

}

export const SECURITY_PARAMS = {
    CLIENT_ID: 'client_id',
    CLIENT_SECRET: 'client_secret',
    GRANT_TYPE: 'grant_type',
    USERNAME: 'username',
    PASSWORD: 'password',
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    SECRET_KEY: 'secret_key',
    OTP_OPTION: 'otp_option',
    MAIL: 'mail',
}

export const HTTP_STATUS_CODE = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

export const ENV_BASE_API = import.meta.env.VITE_API_URL;
export const ENV_BASE_IDENTIFY_PROVIDER_URL = import.meta.env.VITE_IDENTIFY_PROVIDER_URL;
export const ENV_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const ENV_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
export const ENV_GRANT_TYPE = import.meta.env.VITE_GRANT_TYPE;