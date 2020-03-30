import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([
      User
    ]),
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [
    AppService,
    UserService,
  ],
})
export class AppModule {}
