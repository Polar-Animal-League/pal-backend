import { Request, Response } from 'express';
import HttpException from '../Exceptions/HttpException';
import JsonResponse from '../Utils/JsonResponse';

function errorMiddleware(error: HttpException, _: Request, response: Response): Response {
    const status = error.status;
    const message = error.message;
    const data = error.data;
    return JsonResponse.error(response, status, message, data);
}

export default errorMiddleware;