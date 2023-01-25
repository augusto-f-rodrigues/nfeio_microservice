import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NfeService } from './nfe.service';
import { CreateNfeDto } from './dto/create-nfe.dto';

import { CreateCcNfeDto } from './dto/create-cc-nfe.dto';

@Controller('nfe')
export class NfeController {
  /**
   * Constructor
   * @param nfeService Nfe Services
   */
  constructor(private readonly nfeService: NfeService) {}

  /**
   * Request to create invoice
   * @param createNfeDto
   * @returns
   */
  @Post()
  createNf(@Body() createNfeDto: CreateNfeDto) {
    return this.nfeService.createNf(createNfeDto);
  }

  /**
   * Request to get invoice JSON
   * @param id Product Invoice Id
   * @returns Result of function getNfJson
   */
  @Get('/json/:id')
  getNfJson(@Param('id') id: string) {
    return this.nfeService.getNfJson(id);
  }

  /**
   * Request to get invoice PDF
   * @param id Product Invoice Id
   * @returns Result of function getNfPdf
   */
  @Get('/pdf/:id')
  getNfPdf(@Param('id') id: string) {
    return this.nfeService.getNfPdf(id);
  }

  /**
   * Request to get Correction Letter PDF
   * @param id Product Correction Letter Id
   * @returns Result of function getCcPdf
   */
  @Get('/cc/pdf/:id')
  getCcPdf(@Param('id') id: string) {
    return this.nfeService.getCcPdf(id);
  }

  /**
   * Request to send a correction letter to invoice
   * @param id Product Invoice Id
   * @returns Result of function createCc
   */
  @Put('/cc/:id')
  async createCc(@Param('id') id: string, @Body() createCcDTO: CreateCcNfeDto) {
    return await this.nfeService.createCc(id, createCcDTO);
  }

  /**
   * Request to cancel invoice
   * @param id Product Invoice Id
   * @returns Result of function createCc
   */
  @Delete(':id')
  async cancelNf(@Param('id') id: string) {
    return await this.nfeService.cancelNf(id);
  }
}
