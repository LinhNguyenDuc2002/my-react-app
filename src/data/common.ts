import { useMutation, useQuery } from '@tanstack/react-query';
import { type AxiosInstance, type Method } from 'axios';
import handleResponse from '../utils/handleResponse';

export const useFetch = <T, > (instance: AxiosInstance, key: string[], url: string, params?: any) => {
    return useQuery({
        queryKey: [...key],
        queryFn: () => instance.get(url, params).then(handleResponse)
    })
};

export const useAction = <T, > (method: Method = 'POST', instance: AxiosInstance, url?: string, params?: any) => {
    return useMutation({
        // mutationKey: [...key],
        mutationFn: (data?: any) => instance({ // This function that performs an asynchronous task and returns a promise.
            method: method,
            url: url,
            params: params,
            data: data
        }).then(handleResponse)
    })
};