import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
/**
 * Identificar parâmetros não obrigatórias através da documentação do NFE para setar como opcional ex: "name?: string"
 * https://nfe.io/docs/desenvolvedores/rest-api/nota-fiscal-de-produto-v2/#/Product%20Invoices/V2CompaniesByCompany_idProductinvoicesPost
 */
export class CreateNfeDto {
  id: string;

  @IsArray()
  @ValidateNested()
  @Type(() => Payment)
  payment: Payment[];

  serie: number;
  number: number;
  operationOn: string;
  operationNature: string;
  operationType: string;
  destination: string;
  printType: string;
  purposeType: string;
  consumerType: string;
  presenceType: string;
  contingencyOn: string;
  contingencyJustification: string;
  buyer: Buyer;
  totals: Totals;
  transport: Transport;
  additionalInformation: AdditionalInformation;
  items: Item[];
  billing: Billing;
  issuer: Issuer;
  transactionIntermediate: TransactionIntermediate;
  delivery: Delivery;
  withdrawal: Withdrawal;
}

export class Payment {
  paymentDetail: PaymentDetail[];
  payBack: number;
}

export class PaymentDetail {
  method: string;
  amount: number;
  card: Card;
}

export class Card {
  federalTaxNumber: string;
  flag: string;
  authorization: string;
  integrationPaymentType: string;
}

export class Buyer {
  stateTaxNumberIndicator: string;
  tradeName: string;
  taxRegime: string;
  stateTaxNumber: string;
  id: string;
  name: string;
  federalTaxNumber: number;
  email: string;
  address: Address;
  type: string;
}

export class Address {
  phone: string;
  state: string;
  city: City;
  district: string;
  additionalInformation: string;
  street: string;
  number: string;
  postalCode: string;
  country: string;
}

export class City {
  code: string;
  name: string;
}

export class Totals {
  icms: Icms;
  issqn: Issqn;
}

export class Icms {
  baseTax: number;
  icmsAmount: number;
  icmsExemptAmount: number;
  stCalculationBasisAmount: number;
  stAmount: number;
  productAmount: number;
  freightAmount: number;
  insuranceAmount: number;
  discountAmount: number;
  iiAmount: number;
  ipiAmount: number;
  pisAmount: number;
  cofinsAmount: number;
  othersAmount: number;
  invoiceAmount: number;
  fcpufDestinationAmount: number;
  icmsufDestinationAmount: number;
  icmsufSenderAmount: number;
  federalTaxesAmount: number;
  fcpAmount: number;
  fcpstAmount: number;
  fcpstRetAmount: number;
  ipiDevolAmount: number;
}

export class Issqn {
  totalServiceNotTaxedICMS: number;
  baseRateISS: number;
  totalISS: number;
  valueServicePIS: number;
  valueServiceCOFINS: number;
  provisionService: string;
  deductionReductionBC: number;
  valueOtherRetention: number;
  discountUnconditional: number;
  discountConditioning: number;
  totalRetentionISS: number;
  codeTaxRegime: number;
}

export class Transport {
  freightModality: string;
  transportGroup: TransportGroup;
  reboque: Reboque;
  volume: Volume;
  transportVehicle: TransportVehicle;
  sealNumber: string;
  transpRate: TranspRate;
}

export class TransportGroup {
  stateTaxNumber: string;
  transportRetention: string;
  id: string;
  name: string;
  federalTaxNumber: number;
  email: string;
  address: Address2;
  type: string;
}

export class Address2 {
  phone: string;
  state: string;
  city: City2;
  district: string;
  additionalInformation: string;
  street: string;
  number: string;
  postalCode: string;
  country: string;
}

export class City2 {
  code: string;
  name: string;
}

export class Reboque {
  plate: string;
  uf: string;
  rntc: string;
  wagon: string;
  ferry: string;
}

export class Volume {
  volumeQuantity: number;
  species: string;
  brand: string;
  volumeNumeration: string;
  netWeight: number;
  grossWeight: number;
}

export class TransportVehicle {
  plate: string;
  state: string;
  rntc: string;
}

export class TranspRate {
  serviceAmount: number;
  bcRetentionAmount: number;
  icmsRetentionRate: number;
  icmsRetentionAmount: number;
  cfop: number;
  cityGeneratorFactCode: number;
}

export class AdditionalInformation {
  fisco: string;
  taxpayer: string;
  xmlAuthorized: number[];
  effort: string;
  order: string;
  contract: string;
  taxDocumentsReference: TaxDocumentsReference[];
  taxpayerComments: TaxpayerComment[];
  referencedProcess: ReferencedProcess[];
}

export class TaxDocumentsReference {
  taxCouponInformation: TaxCouponInformation;
  documentInvoiceReference: DocumentInvoiceReference;
  documentElectronicInvoice: DocumentElectronicInvoice;
}

export class TaxCouponInformation {
  modelDocumentFiscal: string;
  orderECF: string;
  orderCountOperation: number;
}

export class DocumentInvoiceReference {
  state: number;
  yearMonth: string;
  federalTaxNumber: string;
  model: string;
  series: string;
  number: string;
}

export class DocumentElectronicInvoice {
  accessKey: string;
}

export class TaxpayerComment {
  field: string;
  text: string;
}

export class ReferencedProcess {
  identifierConcessory: string;
  identifierOrigin: number;
}

export class Item {
  code: string;
  codeGTIN: string;
  description: string;
  ncm: string;
  cfop: number;
  unit: string;
  quantity: number;
  unitAmount: number;
  totalAmount: number;
  unitTax: string;
  quantityTax: number;
  taxUnitAmount: number;
  freightAmount: number;
  insuranceAmount: number;
  discountAmount: number;
  othersAmount: number;
  totalIndicator: boolean;
  cest: string;
  tax: Tax;
  additionalInformation: string;
  numberOrderBuy: string;
  itemNumberOrderBuy: number;
  fuelDetail: FuelDetail;
  benefit: string;
  importDeclarations: ImportDeclaration[];
}

export class Tax {
  totalTax: number;
  icms: Icms2;
  ipi: Ipi;
  ii: Ii;
  pis: Pis;
  cofins: Cofins;
  icmsDestination: IcmsDestination;
}

export class Icms2 {
  origin: string;
  cst: string;
  baseTaxModality: string;
  baseTax: number;
  baseTaxSTModality: string;
  baseTaxSTReduction: string;
  baseTaxST: number;
  baseTaxReduction: number;
  stRate: number;
  stAmount: number;
  stMarginAmount: number;
  csosn: string;
  rate: number;
  amount: number;
  percentual: number;
  snCreditRate: number;
  snCreditAmount: number;
  stMarginAddedAmount: string;
  stRetentionAmount: string;
  baseSTRetentionAmount: string;
  baseTaxOperationPercentual: string;
  ufst: string;
  amountSTReason: string;
  baseSNRetentionAmount: string;
  snRetentionAmount: string;
  amountOperation: string;
  percentualDeferment: string;
  baseDeferred: string;
  exemptAmount: number;
  exemptReason: string;
  fcpRate: number;
  fcpAmount: number;
  fcpstRate: number;
  fcpstAmount: number;
  fcpstRetRate: number;
  fcpstRetAmount: number;
  baseTaxFCPSTAmount: number;
  substituteAmount: number;
}

export class Ipi {
  classification: string;
  producerCNPJ: string;
  stampCode: string;
  stampQuantity: number;
  classificationCode: string;
  cst: string;
  base: number;
  rate: number;
  unitQuantity: number;
  unitAmount: number;
  amount: number;
}

export class Ii {
  baseTax: string;
  customsExpenditureAmount: string;
  amount: number;
  iofAmount: number;
}

export class Pis {
  cst: string;
  baseTax: number;
  rate: number;
  amount: number;
  baseTaxProductQuantity: number;
  productRate: number;
}

export class Cofins {
  cst: string;
  baseTax: number;
  rate: number;
  amount: number;
  baseTaxProductQuantity: number;
  productRate: number;
}

export class IcmsDestination {
  vBCUFDest: number;
  pFCPUFDest: number;
  pICMSUFDest: number;
  pICMSInter: number;
  pICMSInterPart: number;
  vFCPUFDest: number;
  vICMSUFDest: number;
  vICMSUFRemet: number;
  vBCFCPUFDest: number;
}

export class FuelDetail {
  codeANP: string;
  percentageNG: number;
  descriptionANP: string;
  percentageGLP: number;
  percentageNGn: number;
  percentageGNi: number;
  startingAmount: number;
  codif: string;
  amountTemp: number;
  stateBuyer: string;
  cide: Cide;
  pump: Pump;
}

export class Cide {
  bc: number;
  rate: number;
  cideAmount: number;
}

export class Pump {
  spoutNumber: number;
  number: number;
  tankNumber: number;
  beginningAmount: number;
  endAmount: number;
}

export class ImportDeclaration {
  code: string;
  registeredOn: string;
  customsClearanceName: string;
  customsClearanceState: string;
  customsClearancedOn: string;
  additions: Addition[];
  exporter: string;
  internationalTransport: string;
  intermediation: string;
}

export class Addition {
  code: number;
  manufacturer: string;
  amount: number;
  drawback: number;
}

export class Billing {
  bill: Bill;
  duplicates: Duplicate[];
}

export class Bill {
  number: string;
  originalAmount: number;
  discountAmount: number;
  netAmount: number;
}

export class Duplicate {
  number: string;
  expirationOn: string;
  amount: number;
}

export class Issuer {
  stStateTaxNumber: string;
}

export class TransactionIntermediate {
  federalTaxNumber: number;
  identifier: string;
}

export class Delivery {
  stateTaxNumber: string;
  id: string;
  name: string;
  federalTaxNumber: number;
  email: string;
  address: Address3;
  type: string;
}

export class Address3 {
  phone: string;
  state: string;
  city: City3;
  district: string;
  additionalInformation: string;
  street: string;
  number: string;
  postalCode: string;
  country: string;
}

export class City3 {
  code: string;
  name: string;
}

export class Withdrawal {
  stateTaxNumber: string;
  id: string;
  name: string;
  federalTaxNumber: number;
  email: string;
  address: Address4;
  type: string;
}

export class Address4 {
  phone: string;
  state: string;
  city: City4;
  district: string;
  additionalInformation: string;
  street: string;
  number: string;
  postalCode: string;
  country: string;
}

export class City4 {
  code: string;
  name: string;
}
