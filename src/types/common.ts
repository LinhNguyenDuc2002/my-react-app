export class ErrorResponse {
    statusText: string;
    status: number;
    data: any;

    constructor(statusText: string, status: number, data: any) {
        this.statusText = statusText;
        this.status = status;
        this.data = data;
    }
}