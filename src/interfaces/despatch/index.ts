import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DespatchInterface {
  id?: string;
  order_id: string;
  supervisor_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DespatchGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  supervisor_id?: string;
  status?: string;
}
