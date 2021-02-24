class HttpException extends Error {
    public status: number;
    public message: string;
    public data?: unknown;
    constructor(status?: number, message?: string, data?: unknown) {
        super(message);
        this.status = status || 500;
        this.message = message || "Internal server error";
        this.data = data;
    }
}

export default HttpException;