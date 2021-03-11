import { Request } from 'express';
import { Response } from 'express';
import '@polar-animal-league/shared/dist/types/express';
import { Requests } from '@polar-animal-league/shared/dist/requests';
import * as express from 'express';
import { hash as bcryptHash } from 'bcryptjs';
import { compare as bcryptCompare } from "bcryptjs"
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

        const uObj: User | undefined = await User.findByEmail(req.body.email);

        if (uObj) {
            return res.sendStatus(409);
        }

        const hash: string = await bcryptHash(req.body.password, 10);
        const user = await new User(req.body.username, hash, req.body.email).save();
        
        return res.cookie('token', JSON.stringify(await JWTHelper.generateToken(user.id))).sendOkResponse({
            id: user.id,
            username: user.username,
            email: user.email,
        });
    }
);

// define the about route
router.post('/login', function (req, res) {
    async (
        req: Request<unknown, unknown, Requests.RegisterRequest>,
        res: Response
    ): Promise<Response> => {
        
        const uObj: User | undefined = await User.findByEmail(req.body.email);

        if (!uObj) {
            return res.sendStatus(404); // Model not found
        }

        const match: boolean = await bcryptCompare(req.body.password, uObj.password); // see if the password matches the hash

        if (match) {
            return res.cookie('token', JSON.stringify(await JWTHelper.generateToken(uObj.id))).sendOkResponse({
                id: uObj.id,
                username: uObj.username,
                email: uObj.email,
            });
        }

        return res.sendStatus(401)
    }
})

export default router;
