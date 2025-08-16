import enUS from 'antd/lib/locale/en_US';
import viVN from 'antd/lib/locale/vi_VN';

export const LOCALE = {
    EN: enUS,
    VI: viVN
}

export const HEADER_PARAMS = {
    CONTENT_TYPE: 'Content-Type',
    ACCEPT_LANGUAGE: 'Accept-Language',
    X_ORIGIN: 'X-Origin'

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

export const ENV_BASE_API = import.meta.env.VITE_API_URL;
export const ENV_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const ENV_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
export const ENV_GRANT_TYPE = import.meta.env.VITE_GRANT_TYPE;