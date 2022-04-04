import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly usersModel: Model<User>) {}
  async createUser(createUserInput: CreateUserInput): Promise<User> {
    try {
      const password = await bcrypt.hash(createUserInput.password, 10);
      const newUser = await this.usersModel.create({
        ...createUserInput,
        password,
      });
      return await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async updateUser(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    try {
      return await this.usersModel.findByIdAndUpdate(
        id,
        { $set: updateUserInput },
        { new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async deleteUser(id: string): Promise<string> {
    try {
      await this.usersModel.findByIdAndDelete(id);
      return 'User successfully deleted';
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.usersModel.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getOneUser(email: string): Promise<User> {
    try {
      return await this.usersModel.findOne({ email });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
