# test-graphql-ws-server

## Server

The purpose of this server is to test subscription queries

Make sure to run `yarn install` before starting.
Server is started by running `yarn start`.

The following queries are available after start:

`{hello}` - a test query that returns 'world'

`subscription { greetings }` - a subscription query that yields a list of greetings

## Client

This is a test client for the above server

Make sure to run `yarn install` before starting.
Server is started by running `yarn start`.

It will run both of the above queries from the server and display the received data in the console.
