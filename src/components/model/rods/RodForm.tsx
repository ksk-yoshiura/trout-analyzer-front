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

type RodData = {
  name: string;
  company: string;
  hardness: string;
  length: string;
  image: string;
}

export default function RodForm() {
  function handleSendRodData(values: RodData) {
    alert(JSON.stringify(values))

  }


  function validateData(value: RodData) {
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
        hardness: '',
        length: '',
        image: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendRodData(values)
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
                    textTransform='uppercase'
                  >NAME</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='name'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='length' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.length)
                    && Boolean(form.touched.length)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='length'
                    textTransform='uppercase'
                  >LENGTH</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='length'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.length}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='hardness' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.hardness)
                    && Boolean(form.touched.hardness)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='hardness'
                    textTransform='uppercase'
                  >HARDNESS</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='hardness'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.hardness}</FormErrorMessage>
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
                    textTransform='uppercase'
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