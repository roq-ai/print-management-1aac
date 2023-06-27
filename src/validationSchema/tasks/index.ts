import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  status: yup.string().required(),
  workflow_id: yup.string().nullable().required(),
  assignee_id: yup.string().nullable().required(),
});
