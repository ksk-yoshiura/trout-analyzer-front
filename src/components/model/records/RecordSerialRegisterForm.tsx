import {
  Formik,
  Form,
  Field,
  FieldProps
} from 'formik';
import {
  Select,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react"
import ResultRadio from './serial_register_partial/SerialRegisterResultRadio'
import SpeedRadio from './serial_register_partial/SerialRegisterSpeedRadio'
import DepthRadio from './serial_register_partial/SerialRegisterDepthRadio'
import LureSelect from './serial_register_partial/SerialRegisterLureSelect'
import TackleSelect from './serial_register_partial/SerialRegisterTackleSelect'

type SerialRecordData = {
  result: string;
  speed: string;
  depth: string;
  lure: string;
  tackle: string;
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
        speed: '',
        result: '',
        depth: '',
        lure: '',
        tackle: ''
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
                  <ResultRadio />
                  <FormErrorMessage>{form.errors.result}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='speed' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.speed)
                    && Boolean(form.touched.speed)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='speed'
                    textTransform='uppercase'
                  >speed</FormLabel>
                  <SpeedRadio />
                  <FormErrorMessage>{form.errors.speed}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='depth' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.depth)
                    && Boolean(form.touched.depth)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='depth'
                    textTransform='uppercase'
                  >depth</FormLabel>
                  <DepthRadio />
                  <FormErrorMessage>{form.errors.depth}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='lure' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.lure)
                    && Boolean(form.touched.lure)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='lure'
                    textTransform='uppercase'
                  >lure</FormLabel>

                  <LureSelect field={field} />

                  <FormErrorMessage>{form.errors.lure}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='tackle' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.tackle)
                    && Boolean(form.touched.tackle)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='tackle'
                    textTransform='uppercase'
                  >tackle</FormLabel>

                  <TackleSelect field={field} />

                  <FormErrorMessage>{form.errors.tackle}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

          </Stack>
          <Button
            my={4}
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