import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NfeModule } from './nfe/nfe.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'dev.env', isGlobal: true }),

    NfeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
