import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
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
import React, { useState } from 'react'

import { CreateAxiosInstance } from "../../../pages/api/utils"
import type { ResetPasswordForm } from '../../../types/auth'

export default function ResetPasswordForm() {
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter()

  // 現在のパスワード
  const [showPassword, setPasswordShow] = useState(false)
  const handlePasswordClick = () => { return setPasswordShow(!showPassword) }
  // 新パスワード
  const [showNewPassword, setNewPasswordShow] = useState(false)
  const handleNewPasswordClick = () => { return setNewPasswordShow(!showNewPassword) }
  // 確認パスワード
  const [showConfirmPassword, setConfirmPasswordShow] = useState(false)
  const handleConfirmPasswordClick = () => { return setConfirmPasswordShow(!showConfirmPassword) }

  // axiosの設定
  const axiosInstance = CreateAxiosInstance()
  const handleSendResetPasswordData = (values: ResetPasswordForm) => {
    const sendValue = { // 調整
      password: values.currentPassword,
      new_password: values.newPassword,
      confirm_password: values.passwordConfirm,
    }
    axiosInstance.post('reset_password', sendValue)
      .then(() => {
        // トップページに遷移
        router.push('/')
        // アラート代わりにトーストを使用
        toast({
          title: 'Your password updated!',
          description: "We've updated your password for you.",
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

  const validateData = (value: ResetPasswordForm) => {
    console.log(value)
  }

  const validateConfirmPassword = (value: ResetPasswordForm) => {
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
        currentPassword: '',
        newPassword: '',
        passwordConfirm: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendResetPasswordData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => {
        return (
          <Form>
            <Stack spacing={5}>

              <Field name='currentPassword' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.currentPassword)
                        && Boolean(form.touched.currentPassword)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='currentPassword'
                        textTransform='uppercase'
                      >Current Password</FormLabel>
                      <InputGroup size='md'>
                        <Input {...field} type={showPassword ? 'text' : 'password'} width="100%" fontSize="1xl" id='currentPassword' variant='flushed' placeholder='Enter' />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handlePasswordClick}>
                            {showPassword ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.currentPassword}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='newPassword' validate={validateConfirmPassword}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.newPassword)
                        && Boolean(form.touched.newPassword)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='newPassword'
                        textTransform='uppercase'
                      >new password</FormLabel>
                      <InputGroup size='md'>
                        <Input {...field} type={showNewPassword ? 'text' : 'password'} width="100%" fontSize="1xl" id='newPassword' variant='flushed' placeholder='Enter' />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleNewPasswordClick}>
                            {showNewPassword ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.newPassword}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='passwordConfirm' validate={validateConfirmPassword}>
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
                      >password confirm</FormLabel>
                      <InputGroup size='md'>
                        <Input {...field} type={showConfirmPassword ? 'text' : 'password'} width="100%" fontSize="1xl" id='passwordConfirm' variant='flushed' placeholder='Enter' />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleConfirmPasswordClick}>
                            {showConfirmPassword ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
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
    </Formik >
  )
}