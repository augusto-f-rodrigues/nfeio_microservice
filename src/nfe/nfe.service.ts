import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, lastValueFrom } from 'rxjs';
import { CreateCcNfeDto } from './dto/create-cc-nfe.dto';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateNfeDto } from './dto/create-nfe.dto';

@Injectable()
export class NfeService {
  /**
   * Logger
   */
  private readonly logger = new Logger(NfeService.name);
  /**
   * Constructor
   * @param httpService Http Service to handle requests
   */
  constructor(private readonly httpService: HttpService) {}

  /**
   * Movidesk URL
   * @type {string}
   */
  http: string = process.env.NFE_BASE_URL;

  /**
   * Function to create a invoice
   * @param createNfeDto Json to create invoice
   * @returns a Object typeof Nfeio.GetJsonResponse
   */
  async createNf(createNfeDto: CreateNfeDto): Promise<Nfeio.JsonResponse> {
    const { data } = await lastValueFrom<{ data: Nfeio.JsonResponse }>(
      this.httpService
        .post(
          `${this.http}/${process.env.NFE_TEST_COMPANY_ID}/productinvoices?apikey=${process.env.NFE_API_KEY}`,
          createNfeDto,
          { headers: { 'Content-Type': 'application/json' } },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('JSON Invoice', JSON.stringify(data));
    this.logger.log('ID Invoice', JSON.stringify(data.id));
    return data;
  }

  /**
   * Function to get JSON of created invoice
   * @param id Product Invoice Id
   * @returns a Object typeof Nfeio.GetJsonResponse
   */
  async getNfJson(id: string): Promise<Nfeio.JsonResponse> {
    const { data } = await lastValueFrom<{ data: Nfeio.JsonResponse }>(
      this.httpService
        .get(
          `${this.http}/${process.env.NFE_TEST_COMPANY_ID}/productinvoices/${id}?apikey=${process.env.NFE_API_KEY}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('JSON', JSON.stringify(data));
    return data;
  }

  /**
   * Function to get PFD of created invoice
   * @param id Product Invoice Id
   * @returns a Object typeof Nfeio.GetPdfResponse
   * @example ```json
   * {
   *  "uri": "string"
   * }
   * ```
   */
  async getNfPdf(id: string): Promise<Nfeio.PdfResponse> {
    const { data } = await lastValueFrom<{ data: Nfeio.PdfResponse }>(
      this.httpService
        .get(
          `${this.http}/${process.env.NFE_TESTE_COMPANY_ID}/productinvoices/${id}/pdf?apikey=${process.env.NFE_API_KEY}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('PDF', JSON.stringify(data));
    console.log(data);
    return data;
  }

  /**
   * Function to get PFD of created correction letter
   * @param id Product Invoice Id
   * @returns a Object typeof Nfeio.GetPdfResponse
   * @example ```json
   * {
   *  "uri": "string"
   * }
   * ```
   */
  async getCcPdf(id: string): Promise<Nfeio.PdfResponse> {
    const { data } = await lastValueFrom<{ data: Nfeio.PdfResponse }>(
      this.httpService
        .get(
          `${this.http}/${process.env.NFE_TEST_COMPANY_ID}/productinvoices/${id}/correctionletter/pdf?apikey=${process.env.NFE_API_KEY}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('PDF', JSON.stringify(data));
    return data;
  }

  /**
   * Function to create a correction letter
   * @param id Product Invoice Id
   * @param createCcDTO Reason to create a correction letter
   * @returns a Object typeof Nfeio.CreateCcResponse
   * @example ```json
   * {
   *    "accountId": "string",
   *    "companyId": "string",
   *    "productInvoiceId": "string",
   *    "reason": "string"
   * }
   * ```
   */
  async createCc(
    id: string,
    createCcDTO: CreateCcNfeDto,
  ): Promise<Nfeio.CreateCcResponse> {
    const { data } = await lastValueFrom<{ data: Nfeio.CreateCcResponse }>(
      this.httpService
        .put(
          `${this.http}/${process.env.NFE_TESTE_COMPANY_ID}/productinvoices/${id}/correctionletter?apikey=${process.env.NFE_API_KEY}`,
          createCcDTO,
          { headers: { 'Content-Type': 'application/json' } },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('CC-e create for id', id);
    return data;
  }

  /**
   * Function to cancel a invoice
   * @param id Product Invoice Id
   * @returns a Object typeof Nfeio.CancelNfResponse
   * @example ```json
   * {
   *    "accountId": "string",
   *    "companyId": "string",
   *    "productInvoiceId": "string",
   *    "reason": "string"
   * }
   * ```
   */
  async cancelNf(id: string): Promise<any> {
    const data = await lastValueFrom(
      this.httpService
        .delete(
          `${this.http}/${process.env.NFE_TEST_COMPANY_ID}/productinvoices/${id}?apikey=${process.env.NFE_API_KEY}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );
    this.logger.log('Invoice Cancelled', id);
    return data;
  }
}
