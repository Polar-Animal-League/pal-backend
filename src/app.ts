import { createConnections } from "typeorm";
async function start() {

    const connections = await createConnections()
        .then(connection => {

        });
}

start();