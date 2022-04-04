import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateItem } from './CreateItem';

@InputType()
export class UpdateItem extends PartialType(CreateItem) {
  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  img?: string;

  @Field()
  information?: string;

  @Field()
  category?: string;
}
