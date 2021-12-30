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
  legnth: string; 
  toughness: string;
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
        length: '',
        toughness: '',
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
                  >NAME</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='name' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='legnth' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.legnth)
                    && Boolean(form.touched.legnth)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='legnth'
                  >LENGTH</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='legnth' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.legnth}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='toughness' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.toughness)
                    && Boolean(form.touched.toughness)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='toughness'
                  >TOUGHNESS</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='toughness' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.toughness}</FormErrorMessage>
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
                  <Input {...field} width="100%" fontSize="1xl" id='company' placeholder='Enter' />
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