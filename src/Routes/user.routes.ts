import { Request } from 'express';
import { Response } from 'express';
import '@polar-animal-league/shared/dist/types/express';
import { Requests } from '@polar-animal-league/shared/dist/requests';
import * as express from 'express';
import { hash as bcryptHash } from 'bcryptjs';
import { User } from '../Models/User';
import { JWTHelper } from "../Helpers/JWTHelper"
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
            return res.sendConflictResponse('');
        }

        const hash: string = await bcryptHash(req.body.password, 10);

        const user = new User(req.body.username, hash, req.body.email);

        await user.save();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const dataToReturn = {
            user_id: user.id,
            email: user.email,
            token: await JWTHelper.generateToken(user.id)
        }

        return res.cookie('user', JSON.stringify(dataToReturn)).sendOkResponse("");
    }
);

// define the about route
// router.post('/login', function (req, res) {

// })

export default router;
