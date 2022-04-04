import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateItem } from './dto/CreateItem';
import { UpdateItem } from './dto/UpdateItem';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';

@Resolver()
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}
  @Mutation(() => Item)
  createItem(@Args('createItem') createItem: CreateItem) {
    return this.itemService.createItem(createItem);
  }
  @Mutation(() => Item)
  updateItem(@Args('updateItem') updateItem: UpdateItem) {
    return this.itemService.updateItem(updateItem);
  }

  @Query(() => [Item])
  getItemsByCategory(@Args('category') category: string) {
    return this.itemService.getItemsByCategory(category);
  }

  @Query(() => [Item])
  getAllItems() {
    return this.itemService.getAllItems();
  }
}
