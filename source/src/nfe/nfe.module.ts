import { Module } from '@nestjs/common';
import { NfeService } from './nfe.service';
import { NfeController } from './nfe.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [NfeController],
  providers: [NfeService],
})
export class NfeModule {}
