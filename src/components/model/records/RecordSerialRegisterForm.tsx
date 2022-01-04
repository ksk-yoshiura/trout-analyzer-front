import {
  Formik,
  Form,
  Field,
  FieldProps
} from 'formik';
import {
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react";
import RadioCard from '../../shared/RadioCard';
import {
  ResultRadiotOptionMock,
  SpeedRadiotOptionMock,
  DepthRadiotOptionMock
} from './serial_register_radio_mock'
import ResultRadio from './serial_register_partial/SerialRegisterResultRadio'

type SerialRecordData = {
  result: string;
  company: string;
  type: string;
}

export default function RecordSerialRegisterForm() {
  function handleSendSerialRecordData(values: SerialRecordData) {
    alert(JSON.stringify(values))

  }


  function validateData(value: SerialRecordData) {
    // let error
    // if (!value) {
    //   error = 'Name is required'
    // } else if (value.toLowerCase() !== 'naruto') {
    //   error = "Jeez! You're not a fan 😱"
    // }
    // return error
  }

  return (
    <Formik
      initialValues={{
        company: '',
        result: '',
        type: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendSerialRecordData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>

            <Field name='result' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.result)
                    && Boolean(form.touched.result)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='result'
                    textTransform='uppercase'
                  >result</FormLabel>
                  <ResultRadio field={field} />
                  <FormErrorMessage>{form.errors.result}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='type' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.type)
                    && Boolean(form.touched.type)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='type'
                  >TYPE</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='type' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='company' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.company)
                    && Boolean(form.touched.company)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='company'
                  >COMPANY</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='company' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.company}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

          </Stack>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )
}