import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type ItemDocument = Item & Document;

@Schema()
@ObjectType()
export class Item {
  @Field()
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  img: string;

  @Prop()
  @Field()
  information: string;

  @Prop()
  @Field()
  category: string;
}
export interface Item {
  _id: string;
  name: string;
  img: string;
  information: string;
  category: string;
}
export const ItemSchema = SchemaFactory.createForClass(Item);
