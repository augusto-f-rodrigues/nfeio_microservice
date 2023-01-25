import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Request to get a message
   * @returns A message
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
