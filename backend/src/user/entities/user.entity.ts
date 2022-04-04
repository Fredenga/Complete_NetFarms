import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Field()
  _id: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  password: string;
}
export interface User {
  email: string;
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
