import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateItem {
  @Field()
  name: string;

  @Field()
  img: string;

  @Field()
  information: string;

  @Field()
  category: string;
}
