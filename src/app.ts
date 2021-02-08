import { createConnections } from "typeorm";
import express from "express"
import userRoutes from "./Routes/user.routes"

const app = express()
const port = 8080
import * as colors from "colors";


app.use(express.json());
async function start(): Promise<void> {

    await createConnections()
        .then(() => {
            console.log(colors.green('Database started')); // outputs green text

            app.use('/user', userRoutes);

            app.listen(port, '0.0.0.0', () => {
                console.log(colors.green(`PAL-backend listening at http://localhost:${port}`))
            })


        });
}

void start();






