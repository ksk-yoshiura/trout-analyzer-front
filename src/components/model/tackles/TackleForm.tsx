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
  Stack
} from "@chakra-ui/react";

type Tackle = {
  rodId: string
  reelId: string
  lineId: string
}

export default function TackleForm() {
  // パラメータからタックルID取得
  const router = useRouter();
  const { id } = router.query
  console.log(id)

  function handleSendTackleData(values: Tackle) {
    alert(JSON.stringify(values))
  }

  function validateData(value: Tackle) {
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
        rodId: '',
        reelId: '',
        lineId: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendTackleData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name='rodId' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.rodId)
                    && Boolean(form.touched.rodId)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='rodId'
                    textTransform='uppercase'
                  >rod</FormLabel>
                  <Input {...field} type="hidden" width="100%" fontSize="1xl" id='rodId'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.rodId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='reelId' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.reelId)
                    && Boolean(form.touched.reelId)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='reelId'
                    textTransform='uppercase'
                  >reel</FormLabel>
                  <Input {...field} type="hidden" width="100%" fontSize="1xl" id='reelId'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.reelId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='lineId' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.lineId)
                    && Boolean(form.touched.lineId)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='lineId'
                    textTransform='uppercase'
                  >line</FormLabel>
                  <Input {...field} type="hidden" width="100%" fontSize="1xl" id='lineId'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.lineId}</FormErrorMessage>
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