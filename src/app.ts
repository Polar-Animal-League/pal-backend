import { createConnections } from "typeorm";

const express = require('express')
const app = express()
const port = 8080

async function start() {

    const connections = await createConnections()
        .then(connection => {

        });
}

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




start();

