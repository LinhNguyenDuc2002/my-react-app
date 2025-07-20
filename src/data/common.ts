import { useQuery } from '@tanstack/react-query';
import handleResponse from '../utils/handleResponse';

export const useFetch = (path: string, key: string) => {
    return useQuery({
        queryKey: [key],
        queryFn: () => {
            return fetch(path).then(handleResponse)
        }
    })
};