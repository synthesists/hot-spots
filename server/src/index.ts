import app from './app';

const port: number = 3001;
app().listen(port, () => console.log(`Listening on port ${port}!`));
