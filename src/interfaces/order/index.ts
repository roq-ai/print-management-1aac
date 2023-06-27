import { DespatchInterface } from 'interfaces/despatch';
import { InvoiceInterface } from 'interfaces/invoice';
import { WorkflowInterface } from 'interfaces/workflow';
import { EnquiryInterface } from 'interfaces/enquiry';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  enquiry_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  despatch?: DespatchInterface[];
  invoice?: InvoiceInterface[];
  workflow?: WorkflowInterface[];
  enquiry?: EnquiryInterface;
  _count?: {
    despatch?: number;
    invoice?: number;
    workflow?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  enquiry_id?: string;
  status?: string;
}
