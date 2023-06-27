import * as yup from 'yup';

export const enquiryValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  sales_representative_id: yup.string().nullable().required(),
});
