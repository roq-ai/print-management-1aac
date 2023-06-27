import { DesignDraftInterface } from 'interfaces/design-draft';
import { WorkflowInterface } from 'interfaces/workflow';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  workflow_id: string;
  assignee_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  design_draft?: DesignDraftInterface[];
  workflow?: WorkflowInterface;
  user?: UserInterface;
  _count?: {
    design_draft?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  workflow_id?: string;
  assignee_id?: string;
  status?: string;
}
