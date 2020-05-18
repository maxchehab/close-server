import net from 'net';

export default function closeServer(server: net.Server) {
  return new Promise<void>((resolve, reject) =>
    server.close((err?: Error) =>
      err ? reject(err) : resolve()
    )
  );
}
