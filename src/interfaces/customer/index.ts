import { DesignDraftInterface } from 'interfaces/design-draft';
import { EnquiryInterface } from 'interfaces/enquiry';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  name: string;
  email: string;
  phone: string;
  sales_representative_id: string;
  created_at?: any;
  updated_at?: any;
  design_draft?: DesignDraftInterface[];
  enquiry?: EnquiryInterface[];
  user?: UserInterface;
  _count?: {
    design_draft?: number;
    enquiry?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  sales_representative_id?: string;
}
