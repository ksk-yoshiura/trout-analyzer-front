import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
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
import NextLink from "next/link"
import { useRouter } from "next/router";
import type { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, signIn } from "next-auth/react";
import React, { useState } from 'react'

import type { Login } from '../types/auth'

// POSTリクエスト（サインイン・サインアウトなど）に必要なCSRFトークンを返却する
export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const res = await getCsrfToken(context)
  return {
    props: {
      title: "login",
      csrfToken: JSON.stringify(res),
    },
  };
};

export default function Login({ csrfToken }: { csrfToken: string | undefined }) {
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter()

  const signInUser = async (data: Login) => {
    await signIn<any>("credentials", {
      redirect: false,
      mailaddress: data.mailaddress,
      password: data.password,
      callbackUrl: `${window.location.origin}`,
    }).then((res) => {
      if (res?.error) {
        toast({
          title: 'Login failed!',
          description: "Enter right mailaddress and password",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } else {
        // ログイン後に飛ぶページ
        router.push("/");
      }
    });
  };

  // 現在のパスワード
  const [showPassword, setPasswordShow] = useState(false)
  const handlePasswordClick = () => { return setPasswordShow(!showPassword) }

  const validateData = (value: Login) => {
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
    <>
      <Formik
        initialValues={{
          mailaddress: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            signInUser(values)
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => {
          return (
            <Form>
              <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <Stack spacing={5}>
                <Field name='mailaddress' validate={validateData}>
                  {({ field, form }: FieldProps) => {
                    return (
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
                        <InputGroup size='md'>
                          <Input {...field} type={showPassword ? 'text' : 'password'} width="100%" fontSize="1xl" id='password' variant='flushed' placeholder='Enter' />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handlePasswordClick}>
                              {showPassword ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
                Login
              </Button>
            </Form>
          )
        }}
      </Formik>
      <NextLink href="/sign_up" passHref>
        <Link py={5} as={'button'} color='teal'>
          sign_up
          <Icon as={ArrowForwardIcon} />
        </Link>
      </NextLink>
    </>
  )
}