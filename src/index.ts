import createDebug from 'debug';
import { createServer } from 'http';
import { exit } from 'process';
import { app } from './app.js';

const debug = createDebug('W6E:server');

const port = process.env.PORT ?? 3000;
const server = createServer(app);
server.listen(port);

server.on('error', (error) => {
  debug('Error', error);
  exit(1);
});

server.on('listener', () => {
  debug(`server running on http://localhost:${port}`);
});
