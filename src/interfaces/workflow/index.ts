import { TaskInterface } from 'interfaces/task';
import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WorkflowInterface {
  id?: string;
  order_id: string;
  production_planner_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  order?: OrderInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface WorkflowGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  production_planner_id?: string;
}
