import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';
import { CreateCcNfeDto } from './dto/create-cc-nfe.dto';
import { CreateNfeDto } from './dto/create-nfe.dto';

@Injectable()
export class NfeService {
  private readonly logger = new Logger(NfeService.name);

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

  /**
   * Function to create a correction letter
   * @param id Product Invoice Id
   * @param createCcDTO Reason to create a correction letter
   * @returns a object like this:
   * ```ts
   * {
   *    accountId: string;
   *    companyId: string;
   *    productInvoiceId: string;
   *    reason: string;
   * }
   * ```
   */
  async createCc(id: string, createCcDTO: CreateCcNfeDto) {
    const { data } = await lastValueFrom<{ data: Nfeio.CreateCcResponse }>(
      this.httpService
        .put(
          `${process.env.NFE_BASE_URL}/${process.env.NFE_COMPANY_ID}/productinvoices/${id}/correctionletter?apikey=${process.env.NFE_API_KEY}`,
          { reason: createCcDTO },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} nfe`;
  }
}
