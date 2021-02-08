import { createConnections } from "typeorm";
import express from "express"
import userRoutes from "./Routes/user.routes"

const app = express()
const port = 8080
const colors = require('colors/safe');


app.use(express.json());
async function start() {

    const connections = await createConnections()
        .then(connection => {
            console.log(colors.green('Database started')); // outputs green text
        });
}

start();


app.use('/user', userRoutes);

app.listen(port, '0.0.0.0', () => {
    console.log(colors.green(`PAL-backend listening at http://localhost:${port}`))
})





