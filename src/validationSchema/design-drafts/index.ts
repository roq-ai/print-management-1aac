import * as yup from 'yup';

export const designDraftValidationSchema = yup.object().shape({
  status: yup.string().required(),
  task_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
