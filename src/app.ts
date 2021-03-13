import { createConnections } from 'typeorm';
import express from 'express';
import userRoutes from './Routes/user.routes';
import chalk from 'chalk';
import cors from "cors"

const app = express();
const port = 8080;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.use(express.json());

async function start(): Promise<void> {
    await createConnections().then(() => {
        console.log(chalk.green('Database started')); // outputs green text

        app.listen(port, '0.0.0.0', () => {
            console.log(chalk.green(`PAL-backend listening at http://localhost:${port}`));
        });
    });
}

app.use('/user', userRoutes);

void start();
