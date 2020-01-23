# close-server

Promisified `http.Server.close()`

## Usage

Install it:

```bash
npm install close-server
yarn add close-server
```

Pass a `http.Server` to `close-server` and it will return a `Promise` which closes the server.

```js
const http = require('http');
const closeServer = require('close-server');
 
const srv = http.createServer();
srv.listen();
...

closeServer(srv).catch(error -> console.error(error));
```

or 

```ts
import http from 'http';
import closeServer from 'close-server';

const srv = http.createServer();
...

try {
    await closeServer(srv);
} catch(error) {
    console.error(error);
}
```



## Authors
- [Max Chehab](https://github.com/maxchehab)