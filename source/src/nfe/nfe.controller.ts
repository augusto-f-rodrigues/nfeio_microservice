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
import { CreateOngoingNfeDto } from './dto/create-ongoing-nfe.dto';

import { CreateCcNfeDto } from './dto/create-cc-nfe.dto';
import { CreateOutgoingNfeDto } from './dto/create-outgoing-nfe.dto';

@Controller('nfeio')
export class NfeController {
  /**
   * Constructor
   * @param nfeService Nfe Services
   */
  constructor(private readonly nfeService: NfeService) {}

  /**
   * Request to create ongoing invoice
   * @param createNfeDto
   * @returns
   */
  @Post('/productInvoice/ongoing')
  createOngoingNf(@Body() createNfeDto: CreateOngoingNfeDto) {
    return this.nfeService.createOngoingNf(createNfeDto);
  }

   /**
   * Request to create outgoing invoice
   * @param createNfeDto
   * @returns
   */
   @Post('/productInvoice/outgoing')
   createOutgoingNf(@Body() createNfeDto: CreateOutgoingNfeDto) {
     return this.nfeService.createOutgoingNf(createNfeDto);
   }

  /**
   * Request to get invoice JSON
   * @param id Product Invoice Id
   * @returns Result of function getNfJson
   */
  @Get('/productInvoice/:id/json')
  getNfJson(@Param('id') id: string) {
    return this.nfeService.getNfJson(id);
  }

  /**
   * Request to get invoice PDF
   * @param id Product Invoice Id
   * @returns Result of function getNfPdf
   */
  @Get('/productInvoice/:id/pdf')
  getNfPdf(@Param('id') id: string) {
    return this.nfeService.getNfPdf(id);
  }

  /**
   * Request to get Correction Letter PDF
   * @param id Product Correction Letter Id
   * @returns Result of function getCcPdf
   */
  @Get('/cc/:id/pdf')
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
  @Delete('/productInvoice/:id')
  async cancelNf(@Param('id') id: string) {
    return await this.nfeService.cancelNf(id);
  }
}
