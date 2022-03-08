import React, { useState } from 'react'
import { getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { CtxOrReq } from "next-auth/client/_utils";
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
import axios from 'axios'

type LoginData = {
  mailaddress: string;
  password: string;
}

// POSTリクエスト（サインイン・サインアウトなど）に必要なCSRFトークンを返却する
export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  return {
    props: {
      title: "login",
      csrfToken: await getCsrfToken(context),
    },
  };
};

export default function LoginForm({ csrfToken }: { csrfToken: string | undefined }) {
  const router = useRouter();
  console.log(csrfToken)
  function handleSendLoginData(values: LoginData) {
    axios.post('/api/login', values)
      .then(function () {
        // リストページに遷移
        router.push('/')
      })
      .catch(function (error) {
        console.log(error)
      })
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
          <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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
                  <Input {...field} width="100%" fontSize="1xl" id='mailaddress' variant='flushed' placeholder='Enter' />
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
                  <Input {...field} width="100%" fontSize="1xl" id='password' variant='flushed' placeholder='Enter' />
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