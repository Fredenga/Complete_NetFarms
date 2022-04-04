import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ItemModule } from './item/item.module';
import { ChatsModule } from './chat/chats.module';
// import { ChatsGateWay } from './chat/chat.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    UserModule,
    AuthModule,
    ItemModule,
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // ChatsGateWay
  ],
})
export class AppModule {}
