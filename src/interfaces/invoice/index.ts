import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvoiceInterface {
  id?: string;
  order_id: string;
  accountant_id: string;
  amount: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvoiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  accountant_id?: string;
  status?: string;
}
