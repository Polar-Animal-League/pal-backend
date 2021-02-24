import { Request, NextFunction, Response, Router } from 'express';
import '@polar-animal-league/shared/dist/types/express';
import { Requests } from '@polar-animal-league/shared/dist/requests';
import { hash as bcryptHash } from 'bcryptjs';
import { User } from '../Models/User';
import JsonResponse from '../Utils/JsonResponse';
import ConflictException from "../Exceptions/ConflictException"
import validationMiddleware from '../Middlewares/validation.middleware';
import { RegisterDto } from '../DTOs/Register.dto';

const router = Router();

// define the about route
router.post(
    '/register',

    validationMiddleware(RegisterDto),

    async (
        req: Request<unknown, unknown, Requests.RegisterRequest>,
        res: Response,
        next: NextFunction
    ): Promise<Response> => {
        const userExists: User | undefined = await User.findByEmail(req.body.email);

        if (userExists) {
            // eslint-disable-next-line
            return <Response><unknown>next(new ConflictException());
        }

        const hash: string = await bcryptHash(req.body.password, 10);

        const user = new User(req.body.username, hash, req.body.email);

        await user.save();

        return JsonResponse.success(res, user);
    }
);

// define the about route
// router.post('/login', function (req, res) {

// })

export default router;
