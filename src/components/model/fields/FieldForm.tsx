import React from 'react'
import { useRouter } from "next/router";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  useFormikContext
} from 'formik';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Thumb from "../../shared/ThumbImage"
import useSWR from 'swr'
import { FieldsApiResponse } from "../../../pages/api/fields/[id]"
import axios from 'axios'

const fetcher = (url: string) => axios(url)
  .then((res) => {
    return res.data
  })

type FieldData = {
  name?: string;
  address?: string;
  image?: string;
}

export default function FieldForm() {
  // パラメータからフィールドID取得
  const router = useRouter();
  const { id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('/api/fields/' + id, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  function handleSendFieldData(values: FieldData) {
    alert(JSON.stringify(values))
  }

  function validateData(value: FieldData) {
    console.log('hi')
    // let error
    // if (!value) {
    //   error = 'Name is required'
    // } else if (value.toLowerCase() !== 'naruto') {
    //   error = "Jeez! You're not a fan 😱"
    // }
    // return error
  }

  // 確認ドロワー
  const ConfirmDrawer = () => {

  // サブミット
  const { submitForm } = useFormikContext();
    return (
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent h={'30vh'}>
          <DrawerBody mt={10} display={'flex'} justifyContent={'space-around'}>
            <Button
              onClick={onClose}
              colorScheme='gray'
              variant='solid'
            >Cancel</Button>
            <Button
              type="submit"
              onClick={() => submitForm()}
              colorScheme='teal'
              variant='solid'
            >Confirm</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Formik
      initialValues={{
        name: data.field?.name,
        address: data.field?.address,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendFieldData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) =>
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
                  <Input {...field} fontSize="1xl" id='name' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='address' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.address)
                    && Boolean(form.touched.address)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='address'
                    textTransform='uppercase'
                  >ADDRESS</FormLabel>
                  <Input {...field} fontSize="1xl" id='address' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='image' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.image)
                    && Boolean(form.touched.image)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='image'
                    textTransform='uppercase'
                  >IMAGE</FormLabel>
                  <Input type="file" {...field} fontSize="1xl" id='image' variant='flushed' placeholder='Enter'
                    value={undefined}
                    onChange={(event) => {
                      props.setFieldValue(
                        "image",
                        event.currentTarget.files !== null
                          ? event.currentTarget.files[0]
                          : null
                      );
                    }}
                  />
                  <Thumb file={field.value} />

                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Stack>
          <Button
            mt={4}
            colorScheme='teal'
            type='button'
            onClick={onOpen}
          >
            Register
          </Button>
          <ConfirmDrawer />
        </Form>
      }
    </Formik>
  )
}