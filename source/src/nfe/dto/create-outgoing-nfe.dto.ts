import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

/**
 * @IsString()Identificar parâmetros não obrigatórias através da documentação do NFE para
 * setar como opcional ex: "name?: string"
 * https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Product%20Invoices/V2CompaniesByCompany_idProductinvoicesPost
 */

class City {
  @IsString()
  code: string;
  @IsString()
  name: string;
}
class Address {
  @IsString()
  phone: string;
  @IsObject()
  @Type(() => City)
  city: City;
  @IsString()
  country: string;
  @IsString()
  state: string;
  @IsString()
  district: string;
  @IsString()
  street: string;
  @IsString()
  postalCode: string;
  @IsString()
  number: string;
  @IsString()
  additionalInformation: string;
}
class Buyer {
  @IsString()
  name: string;
  @ValidateNested()
  @Type(() => Address)
  address: Address;
  @IsNumber()
  federalTaxNumber: number;
  @IsString()
  type: string;
}

class City2 {
  @IsString()
  name: string;
  @IsString()
  code: string;
}
class Address2 {
  @IsString()
  phone: string;
  @IsString()
  state: string;
  city: City2;
  @IsString()
  district: string;
  @IsString()
  additionalInformation: string;
  @IsString()
  street: string;
  @IsString()
  number: string;
  @IsString()
  postalCode: string;
  @IsString()
  country: string;
}

class TransportGroup {
  @IsString()
  stateTaxNumber: string;
  @IsString()
  name: string;
  @IsNumber()
  federalTaxNumber: number;
  @IsString()
  email: string;
  address: Address2;
  @IsString()
  type: string;
}

class Volume {
  @IsNumber()
  volumeQuantity: number;
  @IsString()
  species: string;
  @IsString()
  brand: string;
  @IsString()
  volumeNumeration: string;
  @IsNumber()
  netWeight: number;
  @IsNumber()
  grossWeight: number;
}
class Transport {
  @IsObject()
  @Type(() => TransportGroup)
  transportGroup: TransportGroup;
  @IsObject()
  @Type(() => Volume)
  volume: Volume;
  @IsString()
  sealNumber: string;
  @IsString()
  freightModality: string;
}

class Icms {
  @IsString()
  origin: string;
  @IsString()
  cst: string;
  @IsNumber()
  rate: number;
  @IsNumber()
  baseTax: number;
  @IsString()
  baseTaxSTReduction: string;
  @IsString()
  baseTaxModality: string;
}

class Pis {
  @IsNumber()
  amount: number;
  @IsNumber()
  rate: number;
  @IsNumber()
  baseTax: number;
  @IsString()
  cst: string;
}

class Cofins {
  @IsNumber()
  amount: number;
  @IsNumber()
  rate: number;
  @IsNumber()
  baseTax: number;
  @IsString()
  cst: string;
}
class Tax {
  @IsNumber()
  totalTax: number;
  @IsObject()
  @Type(() => Icms)
  icms: Icms;
  @IsObject()
  @Type(() => Pis)
  pis: Pis;
  @IsObject()
  @Type(() => Cofins)
  cofins: Cofins;
}

class Item {
  @IsString()
  code: string;
  @IsString()
  codeGTIN: string;
  @IsString()
  codeTaxGTIN: string;
  @IsString()
  unit: string;
  @IsNumber()
  quantity: number;
  @IsString()
  cest: string;
  @IsObject()
  @Type(() => Tax)
  tax: Tax;
  @IsString()
  description: string;
  @IsString()
  ncm: string;
  @IsNumber()
  unitAmount: number;
  @IsNumber()
  totalAmount: number;
  @IsNumber()
  cfop: number;
}

class Payment {
  @IsArray()
  @ValidateNested()
  @Type(() => PaymentDetail)
  paymentDetail: PaymentDetail[];
}

class PaymentDetail {
  @IsString()
  method: string;
  @IsNumber()
  amount: number;
}

class DocumentElectronicInvoice {
  @IsString()
  accessKey: string;
}

class DocumentInvoiceReference {
  @IsString()
  series: string;
  @IsString()
  number: string;
}

class TaxDocumentsReference {
  @IsObject()
  @Type(() => DocumentElectronicInvoice)
  documentElectronicInvoice: DocumentElectronicInvoice;
  @IsObject()
  @Type(() => DocumentInvoiceReference)
  documentInvoiceReference: DocumentInvoiceReference;
}

class AdditionalInformation {
  @IsString()
  taxpayer: string;
  @IsArray()
  @ValidateNested()
  @Type(() => TaxDocumentsReference)
  taxDocumentsReference: TaxDocumentsReference[];
}

export class CreateOutgoingNfeDto {
  @IsObject()
  @Type(() => Buyer)
  buyer: Buyer;
  @IsObject()
  @Type(() => Transport)
  transport: Transport;
  @IsArray()
  @ValidateNested()
  @Type(() => Item)
  items: Item[];
  @IsString()
  destination: string;
  @IsString()
  operationNature: string;
  @IsString()
  operationType: string;
  @IsString()
  consumerType: string;
  @IsNumber()
  serie: number;
  @IsString()
  purposeType: string;
  @IsArray()
  @ValidateNested()
  @Type(() => Payment)
  payment: Payment[];
  @IsObject()
  @Type(() => AdditionalInformation)
  additionalInformation: AdditionalInformation;
}
