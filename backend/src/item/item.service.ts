import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItem } from './dto/CreateItem';
import { UpdateItem } from './dto/UpdateItem';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly itemsModel: Model<Item>) {}
  async createItem(createItem: CreateItem): Promise<Item> {
    try {
      const NewItem = await this.itemsModel.create(createItem);
      const SavedItem = await NewItem.save();
      return SavedItem;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateItem(updateItem: UpdateItem): Promise<Item> {
    try {
      return await this.itemsModel.findByIdAndUpdate(
        updateItem.id,
        { $set: updateItem },
        { new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getItemsByCategory(category: string): Promise<Item[]> {
    try {
      return await this.itemsModel.find({ category });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getAllItems(): Promise<Item[]> {
    try {
      return await this.itemsModel.find();
    } catch (error) {
      throw error;
    }
  }
}
