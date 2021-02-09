import { createConnections } from 'typeorm';
import express from 'express';
import userRoutes from './Routes/user.routes';
import chalk from 'chalk';

const app = express();
const port = 8080;

app.use(express.json());
async function start(): Promise<void> {
    await createConnections().then(() => {
        console.log(chalk.green('Database started')); // outputs green text

        app.use('/user', userRoutes);

        app.listen(port, '0.0.0.0', () => {
            console.log(chalk.green(`PAL-backend listening at http://localhost:${port}`));
        });
    });
}

void start();
