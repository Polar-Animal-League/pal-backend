import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import express from 'express';
import HttpException from '../Exceptions/HttpException';

function validationMiddleware(type: ClassConstructor<unknown>): express.RequestHandler {
    return async (req, _, next): Promise<unknown> => {
        // get input validation errors for provided type
        const errors = await validate(plainToClass(type, <unknown[]>req.body))
        // check for errors
        if (errors.length > 0) {
            // format error message
            const message = errors.map((error: ValidationError) => {
                if (!error.constraints) return 'Please provide all required information';
                return Object.values(error.constraints)
            }).join(', ');

            // call the next function with an exception to trigger the Error Middleware
            // eslint-disable-next-line
            return next(new HttpException(400, message));
        }
        // eslint-disable-next-line
        return next();
    }
}

export default validationMiddleware;