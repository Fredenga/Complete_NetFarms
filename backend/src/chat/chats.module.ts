import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatsGateWay } from './chat.gateway';
import { ChatsService } from './chats.service';
import { ChatsSchema } from './entities/chat.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chats', schema: ChatsSchema }]),
  ],
  providers: [ChatsService, ChatsGateWay],
})
export class ChatsModule {}
