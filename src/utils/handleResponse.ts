import type { AxiosResponse } from "axios";
import { ErrorResponse } from "../types/common";

// export default function handleResponse(response: AxiosResponse): Promise<any> {
//     return Promise.all([response.data, response.status, response.statusText])
//     .then(([data, status, statusText]) => {
//         if (status < 200 || status >= 300) {
//             throw new ErrorResponse(statusText, status, data)
//         }

//         // 200 - 299
//         return [data];
//     })
//     .then(([data]) => {
//         return data;
//     });
// }

export default function handleResponse(response: AxiosResponse): Promise<any> {
    const [data, status, statusText] = [response.data, response.status, response.statusText];
    
    if (status < 200 || status >= 300) {
        throw new ErrorResponse(statusText, status, data);
    }
    // 200 - 299
    return data;
}