import { IoAdapter } from '@nestjs/platform-socket.io';

export class SocketAdapter extends IoAdapter {
  createIOServer(port: number, options?: any) {
    const server = super.createIOServer(port, { ...options, cors: true });
    return server;
  }
}
