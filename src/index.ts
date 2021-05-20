import express from 'express';

export const server = express();

const { NODE_PORT = 80 } = process.env;

server.listen(NODE_PORT, () => {});
