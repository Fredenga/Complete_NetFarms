import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './entities/item.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
