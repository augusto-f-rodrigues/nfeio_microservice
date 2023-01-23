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

  @Get()
  findAll() {
    return this.nfeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nfeService.findOne(+id);
  }

  /**
   * Send a correction letter to invoice
   * @param id
   * @returns
   */
  @Put()

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
