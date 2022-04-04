import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/JwtAuthGuard';
import { CurrentUser } from 'src/auth/context/UserDecorator';
import { JwtResponse } from 'src/auth/context/JwtStrategy';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    const id = '';
    return this.userService.updateUser(id, updateUserInput);
  }
  @Query(() => [User])
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  getOneUser(@CurrentUser() user: JwtResponse) {
    return this.userService.getOneUser(user.email);
  }
}
