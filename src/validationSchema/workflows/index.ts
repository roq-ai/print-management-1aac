import * as yup from 'yup';

export const workflowValidationSchema = yup.object().shape({
  order_id: yup.string().nullable().required(),
  production_planner_id: yup.string().nullable().required(),
});
