import { TaskInterface } from 'interfaces/task';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface DesignDraftInterface {
  id?: string;
  task_id: string;
  customer_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface DesignDraftGetQueryInterface extends GetQueryInterface {
  id?: string;
  task_id?: string;
  customer_id?: string;
  status?: string;
}
