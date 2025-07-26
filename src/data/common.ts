import { useMutation, useQuery, type UseMutationResult, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosInstance, type Method } from 'axios';
import handleResponse from '../utils/handleResponse';

export const useFetch = <T, > (instance: AxiosInstance, key: string[], url: string, params?: any): UseQueryResult<T> => {
    return useQuery<T>({
        queryKey: [...key],
        queryFn: () => instance.get(url, params).then(handleResponse)
    })
};

export const useAction = <R, T = unknown, > (method: Method = 'POST', instance: AxiosInstance, url?: string, params?: any): UseMutationResult<R, Error, T> => {
    return useMutation<R, Error, T>({
        // mutationKey: [...key],
        mutationFn: (data?: T) => instance({ // This function that performs an asynchronous task and returns a promise.
            method: method,
            url: url,
            params: params,
            data: data
        }).then(handleResponse)
    })
};