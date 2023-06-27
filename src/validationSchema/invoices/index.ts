import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  order_id: yup.string().nullable().required(),
  accountant_id: yup.string().nullable().required(),
});
