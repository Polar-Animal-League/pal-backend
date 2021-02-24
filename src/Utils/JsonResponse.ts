import { Response } from "express";

export default class JsonResponse {

    public static success(res: Response, data: unknown, message?: string): Response {
        return res.json({
            status: 200,
            message: message || "Success",
            data
        });
    }

    public static error(res: Response, status: number, error: string, data?: unknown): Response {
        return res.status(status).json({
            status,
            data,
            error
        });
    }

}