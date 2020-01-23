# close-server

Promisified `http.Server.close()`

## Usage

Install it:

```bash
npm install close-server
yarn add close-server
```

Pass a `http.Server` to `close-server` and it will return a `Promise` which closes the server.

```ts
import http from 'http';
import closeServer from 'close-server';

const srv = http.createServer();
srv.listen()
...

await closeServer(srv)
```

## Authors

- [Max Chehab](https://github.com/maxchehab)
