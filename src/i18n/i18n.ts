import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { vi } from './locales/vi';

i18n
.use(initReactI18next) // Kết nối với React
.init(
    {
        resources: {
            en: {
                translation: en
            },
            vi: {
                translation: vi
            },
        },
        lng: "en", // Ngôn ngữ mặc định
        fallbackLng: "en", // Ngôn ngữ dự phòng
        interpolation: {
            escapeValue: false, // Không cần thoát ký tự
        },
    }
);

export default i18n;