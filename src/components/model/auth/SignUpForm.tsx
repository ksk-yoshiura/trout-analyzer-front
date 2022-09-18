import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast
} from "@chakra-ui/react";
import type {
  FieldProps
} from 'formik';
import {
  Field,
  Form,
  Formik
} from 'formik';
import { useRouter } from "next/router";
import React from 'react'

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

  const handleSendSignUpData = (values: SignUpData) => {
    // axiosにヘッダー情報付与
    axiosDefaultInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axiosDefaultInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axiosDefaultInstance.post('sign_up', values)
      .then(() => {
        // ログインページに遷移
        router.push('/login')
        // アラート代わりにトーストを使用
        toast({
          title: 'Your account created!',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((error) => {
        toast({
          title: 'Failed!',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }


  const validateData = (value: SignUpData) => {
    console.log(value)
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
      {(props) => {
        return (
          <Form>
            <Stack spacing={5}>
              <Field name='email' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='password' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='passwordConfirm' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
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
        )
      }}
    </Formik>
  )
}