import { Request } from 'express';
import { Response } from 'express';
import '@polar-animal-league/shared/dist/types/express';
import { Requests } from '@polar-animal-league/shared/dist/requests';
import * as express from 'express';
import { hash as bcryptHash } from 'bcryptjs';
import { User } from '../Models/User';
import JsonResponse from '../Utils/JsonResponse';
const router = express.Router();

// define the about route
router.post(
    '/register',

    async (
        req: Request<unknown, unknown, Requests.RegisterRequest>,
        res: Response
    ): Promise<Response> => {
        const userExists: User | undefined = await User.findByEmail(req.body.email);

        if (userExists) {
            return JsonResponse.error(res, 409, '');
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
