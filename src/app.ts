import { createConnections } from "typeorm";
import express from "express"

const app = express()
const port = 8080
const colors = require('colors/safe');

async function start() {

    const connections = await createConnections()
        .then(connection => {
            console.log(colors.green('Database started')); // outputs green text
        });
}

start();

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(port, '0.0.0.0', () => {
    console.log(colors.green(`PAL-backend listening at http://localhost:${port}`))
})





