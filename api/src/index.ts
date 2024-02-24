import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 5000;

app.get('/', (request: Request, response: Response) => {
    response.send('Hello world');
});

app.listen(port, () => {
    console.log(`[server]: Anima API is running on port ${port}`);
});
