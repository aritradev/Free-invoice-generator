export interface BusinessInfo {
  companyName: string;
  address: string;
  taxId: string;
  logo: string; // Base64 string
  businessEmail: string;
  businessPhone: string;
}

export interface ClientInfo {
  name: string;
  email: string;
  phone?: string;
  address: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number | string;
  rate: number | string;
}

export type DocumentType = 'invoice' | 'receipt';
export type DiscountType = 'fixed' | 'percentage';
export type PrintFormat = 'A4' | 'POS';

export interface InvoiceState {
  documentType: DocumentType;
  printFormat: PrintFormat;
  documentId: string;
  date: string;
  dueDate?: string;
  currency: string;
  businessInfo: BusinessInfo;
  clientInfo: ClientInfo;
  items: InvoiceItem[];
  discount: number | string;
  discountType: DiscountType;
  taxPercentage: number | string;
  note?: string;
}
