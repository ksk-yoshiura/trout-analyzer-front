import React from 'react'
import { useRouter } from "next/router";
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
  Stack,
  useToast
} from "@chakra-ui/react";
import { axiosDefaultInstance } from '../../../pages/api/utils'

type SignUpData = {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUpForm() {
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();

  function handleSendSignUpData(values: SignUpData) {
    axiosDefaultInstance.post('sign_up', values)
        .then(function () {
          // ログインページに遷移
          router.push('/login')
        })
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
  }


  function validateData(value: SignUpData) {
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
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendSignUpData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name='email' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.email)
                    && Boolean(form.touched.email)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='email'
                    textTransform='uppercase'
                  >email</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='email' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                  <Input {...field} width="100%" fontSize="1xl" id='password' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='passwordConfirm' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.passwordConfirm)
                    && Boolean(form.touched.passwordConfirm)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='passwordConfirm'
                    textTransform='uppercase'
                  >password Confirm</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='passwordConfirm' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
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