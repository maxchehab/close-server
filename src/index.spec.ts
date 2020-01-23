import http from 'http';
import closeServer from '.';

describe('close-server', () => {
  it('throws error when closing server that did not run', async () => {
    const srv = http.createServer();
    await expect(closeServer(srv)).rejects.toMatchSnapshot();
  });

  it('throws error when closing server that already is closed', async () => {
    const srv = http.createServer();
    srv.listen();

    await closeServer(srv);
    await expect(closeServer(srv)).rejects.toMatchSnapshot();
  });

  it('closes a running server successfully', async () => {
    const srv = http.createServer();
    srv.listen();

    expect(await closeServer(srv)).toBeUndefined();
    expect(srv.listening).toEqual(false);
  });
});
