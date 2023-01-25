import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Function of request GET
   * @returns A message
   * @example 'HelloWorld!'
   */
  getHello(): string {
    return 'Hello World!';
  }
}
