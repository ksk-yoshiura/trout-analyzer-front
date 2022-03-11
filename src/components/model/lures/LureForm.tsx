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
  useToast
} from "@chakra-ui/react";
import Thumb from "../../shared/ThumbImage"
import Loading from '../../shared/Loading'
import LureTypeSelect from "./LureTypeSelect"
import useSWR from 'swr'
import { LuresApiResponse } from "../../../pages/api/lures/[id]"
import { createAxiosInstance } from "../../../pages/api/utils"

type LureData = {
  name?: string;
  company?: string;
  color?: string;
  weight?: string;
  type?: string;
  image?: string;
}

export default function LureForm() {
  // パラメータからルアーID取得
  const router = useRouter();
  const { id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()

  // APIからデータ取得
  const { data, error } = useSWR<LuresApiResponse, Error>('lures/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // axiosの設定
  const axiosInstance = createAxiosInstance()
  
  // API登録・更新
  function handleSendLureData(values: LureData) {
    if (id) { // ルアーIDがある場合は更新
      axiosInstance.put('lures/' + id, values)
        .then(function () {
          // リストページに遷移
          router.push('/lures')
          // アラート代わりにトーストを使用
          toast({
            title: 'Lure updated!',
            description: "We've updated your lure data for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // ルアーIDがない場合は登録
      axiosInstance.post('lures', values)
        .then(function () {
          // リストページに遷移
          router.push('/lures')
          // アラート代わりにトーストを使用
          toast({
            title: 'Lure registered!',
            description: "We've created your lure data for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    }
  }

  function validateData(value: LureData) {
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
        name: data.result?.name,
        company: data.result?.company,
        color: data.result?.color,
        weight: data.result?.weight,
        type: data.result?.lureType,
        image: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLureData(values)
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
            <Field name='type' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.type)
                    && Boolean(form.touched.type)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='type'
                    textTransform='uppercase'
                  >LURE TYPE</FormLabel>
                  <LureTypeSelect field={field} />
                  <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='color' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.color)
                    && Boolean(form.touched.color)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='color'
                    textTransform='uppercase'
                  >COLOR</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='color' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.color}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='weight' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.weight)
                    && Boolean(form.touched.weight)}
                  textAlign='left'
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='weight'
                    textTransform='uppercase'
                  >WEIGHT</FormLabel>
                  <Input {...field} width="30%" fontSize="1xl" id='weight' /> g
                  <FormErrorMessage>{form.errors.weight}</FormErrorMessage>
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