import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.getOneUser(email);
      const validated = await bcrypt.compare(password, user?.password);
      if (user && validated) {
        return user;
      }
      return null;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user._id,
      }),
      user,
    };
  }
}
