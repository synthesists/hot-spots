import express, { Request, Response } from 'express';
import graphqlHttp from 'express-graphql';
import cors from 'cors';
import schema from './schemas/schemas';
import resolver from './resolvers/resolvers';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHttp({
  schema,
  rootValue: resolver,
  graphiql: true,
}));

app.get('/', (req: Request, res: Response) => res.send('Hello, from the server'));

export default () => app;
