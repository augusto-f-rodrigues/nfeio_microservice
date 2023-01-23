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
  constructor(private readonly nfeService: NfeService) {}

  /**
   * Request to create invoice
   * @param createNfeDto
   * @returns
   */
  @Post()
  create(@Body() createNfeDto: CreateNfeDto) {
    return this.nfeService.create(createNfeDto);
  }

  @Get('/json/:id')
  getNfJson(@Param('id') id: string) {
    return this.nfeService.getNfJson(id);
  }

  @Get('/pdf/:id')
  getNfPdf(@Param('id') id: string) {
    return this.nfeService.getNfPdf(id);
  }

  /**
   * Send a correction letter to invoice

   * @param id Product Invoice Id
   * @returns 
   */
  @Put(':id')
  async createCc(@Param('id') id: string, @Body() createCcDTO: CreateCcNfeDto) {
    return await this.nfeService.createCc(id, createCcDTO);
  }


  /**
   * Request to cancel invoice
   * @param id
   * @returns
   */
  @Delete('/:id')
  async DeleteInvoice(@Param('id') id: string) {
    const invoiceRemove = await this.nfeService.removeNFE(id);
    try {
      return invoiceRemove;
    } catch (error) {
      return error.message;
    }
  }
}
