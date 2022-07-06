import { createClient } from 'graphql-ws';
import { WebSocket } from 'ws';
import {expect} from "expect";

const client = createClient({
  url: 'ws://localhost:4000/graphql',
  webSocketImpl: WebSocket
});

// query
(async () => {
  const result = await new Promise((resolve, reject) => {
    let result;
    client.subscribe(
      {
        query: '{ hello }',
      },
      {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      },
    );
  });

  expect(result.data).toEqual({ hello: 'world' });
})();

// subscription
(async () => {
  const onNext = (value) => {
    console.log(value);
  };

  let unsubscribe = () => {
    /* complete the subscription */
  };

  await new Promise((resolve, reject) => {
    unsubscribe = client.subscribe(
      {
        query: 'subscription { greetings }',
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      },
    );
  });

})();
