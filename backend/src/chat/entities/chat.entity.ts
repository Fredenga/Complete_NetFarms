import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatsDocument = Chats & Document;

@Schema()
export class Chats {
  _id?: string;

  @Prop()
  email: string;

  @Prop()
  text: string;
}
export interface Chats {
  _id?: string;
  email: string;
  text: string;
}
export const ChatsSchema = SchemaFactory.createForClass(Chats);
