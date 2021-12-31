import {
  Formik,
  Form,
  Field,
  FieldProps
} from 'formik';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react";

type LineData = {
  name: string;
  company: string;
  type: string;
  thickness: string;
}

export default function ReelForm() {
  function handleSendLineData(values: LineData) {
    alert(JSON.stringify(values))

  }


  function validateData(value: LineData) {
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
        name: '',
        company: '',
        thickness: '',
        type: '',
        image: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLineData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name='name' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.name)
                    && Boolean(form.touched.name)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='name'
                  >NAME</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='name'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='thickness' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.thickness)
                    && Boolean(form.touched.thickness)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='thickness'
                  >THICKNESS</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='thickness'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.thickness}</FormErrorMessage>
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
                  <Input {...field} width="100%" fontSize="1xl" id='type'  variant='flushed' placeholder='Enter' />
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
                  <Input {...field} width="100%" fontSize="1xl" id='company'  variant='flushed' placeholder='Enter' />
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