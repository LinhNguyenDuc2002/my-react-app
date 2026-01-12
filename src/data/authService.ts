import { useAction } from './common';
import { type Oauth2Form, type Oauth2Response } from '../types/authentication';
import identifyProviderInstance from './axios_instances/identifyProviderInstance';

export const useAuthenAction = () => {
    return useAction<Oauth2Response, Oauth2Form>('POST', identifyProviderInstance, '/realms/my-realm/protocol/openid-connect/token');
}