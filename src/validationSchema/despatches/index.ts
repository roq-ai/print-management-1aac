import * as yup from 'yup';

export const despatchValidationSchema = yup.object().shape({
  status: yup.string().required(),
  order_id: yup.string().nullable().required(),
  supervisor_id: yup.string().nullable().required(),
});
