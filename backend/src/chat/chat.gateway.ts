import { Injectable, Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatsService } from './chats.service';
import { Chats } from './entities/chat.entity';

@Injectable()
@WebSocketGateway()
export class ChatsGateWay
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private chatsService: ChatsService) {}
  private logger: Logger = new Logger('ChatGateway');
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.logger.log('Initialized NetFarms Chat Websocket');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client connected ${client.id}`);
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() { data }: any) {
    this.logger.log(data || 'client socket failed');
    this.chatsService.processMessages({ ...data }).then((res: Chats[]) => {
      this.logger.log([...res]);
      this.server.emit('message', res);
    });
  }
}
