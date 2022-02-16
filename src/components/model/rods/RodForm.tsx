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
import ToolConditionSelect from '../../shared/ToolConditionSelect'
import useSWR from 'swr'
import { RodsApiResponse } from "../../../pages/api/rods/[id]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type RodData = {
  name?: string;
  company?: string;
  hardness?: string;
  length?: string;
  image?: string;
}

// ロッド硬さ
const rodHardnessType = 1

export default function RodForm() {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()

  // APIからデータ取得
  const { data, error } = useSWR<RodsApiResponse, Error>('/api/rods/' + id, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  function handleSendRodData(values: RodData) {
    alert(JSON.stringify(values))
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
        name: data.rod?.name,
        company: data.rod?.company,
        hardness: data.rod?.hardness,
        length: data.rod?.length,
        image: '' // TODO ：適切な形式で
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
                  <Input {...field} width="100%" fontSize="1xl" id='name' variant='flushed' placeholder='Enter' />
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
                  <Input {...field} width="100%" fontSize="1xl" id='length' variant='flushed' placeholder='Enter' />
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
                  <ToolConditionSelect field={field} typeNum={rodHardnessType} />
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
                  <Input {...field} width="100%" fontSize="1xl" id='company' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.company}</FormErrorMessage>
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
      )}
    </Formik>
  )
}