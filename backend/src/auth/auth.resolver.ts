import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/GqlAuthGuard';
import { LoginInput } from './res/LoginInput';
import { LoginResponse } from './res/LoginResponse';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginInput') loginInput: LoginInput, @Context() context) {
    return await this.authService.login(context.user);
  }
}
