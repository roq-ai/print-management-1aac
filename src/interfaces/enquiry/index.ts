import { OrderInterface } from 'interfaces/order';
import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EnquiryInterface {
  id?: string;
  customer_id: string;
  sales_representative_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  customer?: CustomerInterface;
  user?: UserInterface;
  _count?: {
    order?: number;
  };
}

export interface EnquiryGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  sales_representative_id?: string;
  status?: string;
}
