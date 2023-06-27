import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
  Center,
} from '@chakra-ui/react';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useFormik, FormikHelpers } from 'formik';
import { getDesignDraftById, updateDesignDraftById } from 'apiSdk/design-drafts';
import { Error } from 'components/error';
import { designDraftValidationSchema } from 'validationSchema/design-drafts';
import { DesignDraftInterface } from 'interfaces/design-draft';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, withAuthorization } from '@roq/nextjs';
import { TaskInterface } from 'interfaces/task';
import { CustomerInterface } from 'interfaces/customer';
import { getTasks } from 'apiSdk/tasks';
import { getCustomers } from 'apiSdk/customers';

function DesignDraftEditPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error, isLoading, mutate } = useSWR<DesignDraftInterface>(
    () => (id ? `/design-drafts/${id}` : null),
    () => getDesignDraftById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: DesignDraftInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateDesignDraftById(id, values);
      mutate(updated);
      resetForm();
      router.push('/design-drafts');
    } catch (error) {
      setFormError(error);
    }
  };

  const formik = useFormik<DesignDraftInterface>({
    initialValues: data,
    validationSchema: designDraftValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Edit Design Draft
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        {formError && (
          <Box mb={4}>
            <Error error={formError} />
          </Box>
        )}
        {isLoading || (!formik.values && !error) ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="status" mb="4" isInvalid={!!formik.errors?.status}>
              <FormLabel>Status</FormLabel>
              <Input type="text" name="status" value={formik.values?.status} onChange={formik.handleChange} />
              {formik.errors.status && <FormErrorMessage>{formik.errors?.status}</FormErrorMessage>}
            </FormControl>
            <AsyncSelect<TaskInterface>
              formik={formik}
              name={'task_id'}
              label={'Select Task'}
              placeholder={'Select Task'}
              fetcher={getTasks}
              renderOption={(record) => (
                <option key={record.id} value={record.id}>
                  {record?.status}
                </option>
              )}
            />
            <AsyncSelect<CustomerInterface>
              formik={formik}
              name={'customer_id'}
              label={'Select Customer'}
              placeholder={'Select Customer'}
              fetcher={getCustomers}
              renderOption={(record) => (
                <option key={record.id} value={record.id}>
                  {record?.email}
                </option>
              )}
            />
            <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
              Submit
            </Button>
          </form>
        )}
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'design_draft',
  operation: AccessOperationEnum.UPDATE,
})(DesignDraftEditPage);
