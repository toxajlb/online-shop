import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { getJwtConfig } from './config/jwt.config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
