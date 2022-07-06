import { WebSocketServer } from 'ws'; // yarn add ws
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from './schema.js';

const server = new WebSocketServer({
  port: 4000,
  path: '/graphql',
});

useServer({ schema }, server);

console.log('Listening to port 4000');
