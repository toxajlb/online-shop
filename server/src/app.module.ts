import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { getJwtConfig } from './config/jwt.config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  providers: [AppService, JwtStrategy, PrismaService],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
    UserModule,
  ],
})
export class AppModule {}
