declare namespace Nfeio {
  interface CreateCcResponse {
    accountId: string;
    companyId: string;
    productInvoiceId: string;
    reason: string;
  }

  interface CancelNfResponse {
    accountId: string;
    companyId: string;
    productInvoiceId: string;
    reason: string;
  }

  interface PdfResponse {
    uri: string;
  }

  interface JsonResponse {
    id: string;
    status: string;
    operationNature: string;
    createdOn: string;
    modifiedOn: string;
    serie: number;
    number: number;
    operationType: string;
    environmentType: string;
    purposeType: string;
    issuer: Issuer;
    buyer: Buyer;
    totals: Totals;
    transport: Transport;
    additionalInformation: AdditionalInformation;
    billing: Billing;
    payment: Payment[];
    lastEvents: LastEvents;
    transactionIntermediate: TransactionIntermediate;
    delivery: Delivery;
    withdrawal: Withdrawal;
  }

  interface Issuer {
    stStateTaxNumber: string;
    tradeName: string;
    openningDate: string;
    taxRegime: string;
    specialTaxRegime: string;
    legalNature: string;
    economicActivities: EconomicActivity[];
    companyRegistryNumber: number;
    regionalTaxNumber: number;
    regionalSTTaxNumber: number;
    municipalTaxNumber: string;
    id: string;
    name: string;
    federalTaxNumber: number;
    email: string;
    address: Address;
    type: string;
  }

  interface EconomicActivity {
    type: string;
    code: number;
  }

  interface Address {
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

  interface City {
    code: string;
    name: string;
  }

  interface Buyer {
    stateTaxNumberIndicator: string;
    tradeName: string;
    taxRegime: string;
    stateTaxNumber: string;
    id: string;
    name: string;
    federalTaxNumber: number;
    email: string;
    address: Address2;
    type: string;
  }

  interface Address2 {
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

  interface City2 {
    code: string;
    name: string;
  }

  interface Totals {
    icms: Icms;
    issqn: Issqn;
  }

  interface Icms {
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

  interface Issqn {
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

  interface Transport {
    freightModality: string;
    transportGroup: TransportGroup;
    reboque: Reboque;
    volume: Volume;
    transportVehicle: TransportVehicle;
    sealNumber: string;
    transpRate: TranspRate;
  }

  interface TransportGroup {
    stateTaxNumber: string;
    transportRetention: string;
    id: string;
    name: string;
    federalTaxNumber: number;
    email: string;
    address: Address3;
    type: string;
  }

  interface Address3 {
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

  interface City3 {
    code: string;
    name: string;
  }

  interface Reboque {
    plate: string;
    uf: string;
    rntc: string;
    wagon: string;
    ferry: string;
  }

  interface Volume {
    volumeQuantity: number;
    species: string;
    brand: string;
    volumeNumeration: string;
    netWeight: number;
    grossWeight: number;
  }

  interface TransportVehicle {
    plate: string;
    state: string;
    rntc: string;
  }

  interface TranspRate {
    serviceAmount: number;
    bcRetentionAmount: number;
    icmsRetentionRate: number;
    icmsRetentionAmount: number;
    cfop: number;
    cityGeneratorFactCode: number;
  }

  interface AdditionalInformation {
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

  interface TaxDocumentsReference {
    taxCouponInformation: TaxCouponInformation;
    documentInvoiceReference: DocumentInvoiceReference;
    documentElectronicInvoice: DocumentElectronicInvoice;
  }

  interface TaxCouponInformation {
    modelDocumentFiscal: string;
    orderECF: string;
    orderCountOperation: number;
  }

  interface DocumentInvoiceReference {
    state: number;
    yearMonth: string;
    federalTaxNumber: string;
    model: string;
    series: string;
    number: string;
  }

  interface DocumentElectronicInvoice {
    accessKey: string;
  }

  interface TaxpayerComment {
    field: string;
    text: string;
  }

  interface ReferencedProcess {
    identifierConcessory: string;
    identifierOrigin: number;
  }

  interface Billing {
    bill: Bill;
    duplicates: Duplicate[];
  }

  interface Bill {
    number: string;
    originalAmount: number;
    discountAmount: number;
    netAmount: number;
  }

  interface Duplicate {
    number: string;
    expirationOn: string;
    amount: number;
  }

  interface Payment {
    paymentDetail: PaymentDetail[];
    payBack: number;
  }

  interface PaymentDetail {
    method: string;
    amount: number;
    card: Card;
  }

  interface Card {
    federalTaxNumber: string;
    flag: string;
    authorization: string;
    integrationPaymentType: string;
  }

  interface LastEvents {
    events: Event[];
    hasMore: boolean;
  }

  interface Event {
    data: Data;
    type: string;
    sequence: number;
  }

  interface Data {}

  interface TransactionIntermediate {
    federalTaxNumber: number;
    identifier: string;
  }

  interface Delivery {
    stateTaxNumber: string;
    id: string;
    name: string;
    federalTaxNumber: number;
    email: string;
    address: Address4;
    type: string;
  }

  interface Address4 {
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

  interface City4 {
    code: string;
    name: string;
  }

  interface Withdrawal {
    stateTaxNumber: string;
    id: string;
    name: string;
    federalTaxNumber: number;
    email: string;
    address: Address5;
    type: string;
  }

  interface Address5 {
    phone: string;
    state: string;
    city: City5;
    district: string;
    additionalInformation: string;
    street: string;
    number: string;
    postalCode: string;
    country: string;
  }

  interface City5 {
    code: string;
    name: string;
  }
}
