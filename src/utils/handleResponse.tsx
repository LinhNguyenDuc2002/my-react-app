import JSONbig from "json-bigint"; // npm i --save-dev @types/json-bigint

class ResponseError {
    statusText: string;
    status: number;
    body: string;

    constructor(statusText: string, status: number, body: string) {
        this.statusText = statusText;
        this.status = status;
        this.body = body;
    }
}

export default function handleResponse(res: Response): Promise<any> {
    return Promise.all([res, res.text()])
    .then(([response, body]) => {
        if (!response.ok) {
            const responseError = new ResponseError(response.statusText, response.status, body);
            throw responseError;
        }

        return [body];
    })
    .then(([text]) => {
        if (!text || text.length === 0) {
            return null;
        } 
        else {
            try {
                return JSONbig.parse(text);
            } catch (e) {
                // Fallback if response is not JSON
                return text;
            }
        }
    });
}