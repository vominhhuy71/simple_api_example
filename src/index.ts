import http from 'http';

import app from './app';
import env from './config/env';
import initMongo from './config/initMongo';

initMongo();

const port = 3000;

app.set('port', port);
const server = http.createServer(app);

server.listen(port);
