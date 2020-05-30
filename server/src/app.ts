import express, { Request, Response } from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schemas/schemas'
import resolver from './resolvers/resolvers'

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHttp({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}));

app.get('/', (req: Request, res: Response) => res.send('Hello, from the server'));

export default () => app;
