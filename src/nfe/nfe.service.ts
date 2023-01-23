import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateNfeDto } from './dto/create-nfe.dto';

@Injectable()
export class NfeService {
  constructor(private readonly httpService: HttpService) {}
  create(createNfeDto: CreateNfeDto) {
    return 'This action adds a new nfe';
  }

  findAll() {
    return `This action returns all nfe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nfe`;
  }

  async removeNFE(id: string) {
    const deleteNFE = await this.httpService.delete(
      `${this.httpService}/${process.env.NEF_COMPANY_ID}/productinvoices/${process.env.NFE_TEST_COMPANY_ID}`,
    );
    return deleteNFE;
  }
}
