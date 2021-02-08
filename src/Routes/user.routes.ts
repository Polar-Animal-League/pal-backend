import { Request } from "express";
import { Response } from "express"
import "@polar-animal-league/shared/dist/types/express";
import { Requests } from "@polar-animal-league/shared/dist/requests"
import * as express from "express"
import { hash as bcryptHash } from "bcryptjs";
import { body, validationResult } from "express-validator";
import { User } from "../Models/User";
const router = express.Router()

// define the about route
router.post('/register',

    async (req: Request<unknown, unknown, Requests.RegisterRequest>, res: Response): Promise<Response> => {
        // const errors = validationResult(<Request>req);
        // // basic validation handling, will need to improve error message returns for the FE
        // if (!errors.isEmpty()) {
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        //     return res.status(400).json({ errors: errors.array() });
        // }


        // const userExists: User[] = await User.findByEmail(req.body.email)

        // if (userExists) {
        //     return res.sendConflictResponse("")
        // }
        // const user = new User()
        // user.username = req.body.username
        // user.email = req.body.email

        // const hash: string = await bcryptHash(req.body.password, 10)

        // user.password = hash

        // await user.save()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        return res.sendOkResponse("foo");
    })

// define the about route
// router.post('/login', function (req, res) {

// })

export default router