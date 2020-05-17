import express, { Request, Response } from 'express';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => res.send('Hello, from the server'));

export default () => app;
