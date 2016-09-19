"use strict";

let express = require('express');
let app = express();
let server = require('http').createServer();
let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({ server });
// let url = require('url');

app.use(express.static('public'));

wss.on('connection', (ws) => {
  // let location = url.parse(ws.upgradeReq.url, true);
  // you might use location.query.access_token to authenticate or share sessions
  // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('something');
});

app.listen(3000);
server.listen(3001, () => console.log(`Listening on ${server.address().port}`));
