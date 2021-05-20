import cors from 'cors';
import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';

const { NODE_PORT = 80, DISABLE_HTTPS = false } = process.env;

const server = express();
server.use(cors());

if (DISABLE_HTTPS) {
  http.createServer(server).listen(NODE_PORT);
} else {
  https
    .createServer(
      {
        key: fs.readFileSync('./certs/server.key'),
        cert: fs.readFileSync('./certs/server.cert'),
      },
      server,
    )
    .listen(NODE_PORT);
}
