import React from 'react'
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

type LoginData = {
  mailaddress: string;
  password: string;
}

export default function LoginForm() {
  function handleSendLoginData(values: LoginData) {
    alert(JSON.stringify(values))
  }


  function validateData(value: LoginData) {
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
        mailaddress: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLoginData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name='mailaddress' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.mailaddress)
                    && Boolean(form.touched.mailaddress)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='mailaddress'
                    textTransform='uppercase'
                  >mailaddress</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='mailaddress'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.mailaddress}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='password' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.password)
                    && Boolean(form.touched.password)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='password'
                    textTransform='uppercase'
                  >password</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='password'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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