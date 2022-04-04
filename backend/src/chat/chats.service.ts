import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chats } from './entities/chat.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel('Chats') private readonly chatsModel: Model<Chats>,
  ) {}
  //   async getMessages() {
  //     try {
  //       return await this.chatsModel.find();
  //     } catch (error) {
  //       throw new InternalServerErrorException(error);
  //     }
  //   }

  async processMessages(chats: Chats): Promise<Chats[]> {
    try {
      const newMessage = await this.chatsModel.create(chats);
      newMessage.save();
      return await this.chatsModel.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
