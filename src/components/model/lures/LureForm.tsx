import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  useDisclosure,
  useNumberInput,
  useToast
} from "@chakra-ui/react";
import type {
  FieldProps
} from 'formik';
import {
  Field,
  Form,
  Formik,
  useField,
  useFormikContext
} from 'formik';
import { useRouter } from "next/router";
import React, { useEffect } from 'react'

import { CreateAxiosInstance } from "../../../pages/api/utils"
import convertFileIntoBase64 from "../../../utils/base64Convert"
import Thumb from "../../shared/ThumbImage"
import LuresColorPalette from "./LuresColorPalette"
import LureTypeSelect from "./LureTypeSelect"

type LureData = {
  ID?: string
  lureTypeId?: string
  name?: string
  companyName?: string
  color?: string
  weight?: string
  image?: any; // 一旦anyで回避
  size?: number
}

// 編集データ
type DetailProps = {
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
  data?: LureData
}

export default function LureForm(props: DetailProps) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();
  // データ各種取得
  const { chosenId, data } = props

  // axiosの設定
  const axiosInstance = CreateAxiosInstance()


  // ルアー重さ
  const InputWightNumber = (props: any) => {
    const [field, , helpers] = useField(props);

    // 初期値表示
    const defaultValue = field.value !== '' ? field.value : '2.0'
    useEffect(() => { // 初期値をフィールドにセット
      helpers.setValue(defaultValue)
    }, [])

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 0.1,
        min: 0.1,
        max: 10,
        precision: 1,
        name: field.name,
        value: defaultValue,
        onChange: (valueAsString,) => { return helpers.setValue(valueAsString) }
      })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
      <HStack maxW='150px' >
        <Button {...inc}>+</Button>
        <Input {...input} fontSize="1xl" variant='flushed' />
        <Button {...dec}>-</Button>
        <Box>g</Box>
      </HStack>
    )
  }


  // API登録・更新
  const handleSendLureData = async (values: LureData) => {
    // 画像データはbase64に変換
    const imageBase64 = values.image ? await convertFileIntoBase64(values.image) : ''
    const lurePostData = {
      lureTypeId: values.lureTypeId,
      name: values.name,
      companyName: values.companyName,
      color: values.color,
      weight: values.weight,
      image: imageBase64
    }

    if (chosenId !== '0') { // ルアーIDがある場合は更新
      axiosInstance.put('lures/' + chosenId, lurePostData)
        .then(() => {
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
        .catch((error) => {
          toast({
            title: 'Failed!',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // ルアーIDがない場合は登録
      axiosInstance.post('lures', lurePostData)
        .then(() => {
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
  }

  const validateData = (value: LureData) => { // TODO：image専用のバリで
    let error
    if (value && value.size && value.size > 300000) {
      error = 'Image size should be less than 300K'
    }
    return error
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
              onClick={() => { return submitForm() }}
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
        name: data?.name,
        companyName: data?.companyName,
        color: data?.color,
        weight: data?.weight,
        lureTypeId: data?.lureTypeId,
        image: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLureData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => {
        return (
          <Form>
            <Stack spacing={5}>
              <Field name='name' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>
              <Field name='lureTypeId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.lureTypeId)
                        && Boolean(form.touched.lureTypeId)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='lureTypeId'
                        textTransform='uppercase'
                      >LURE TYPE</FormLabel>
                      <LureTypeSelect field={field} />
                      <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name='color' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.color)
                        && Boolean(form.touched.color)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='color'
                        textTransform='uppercase'
                      >COLOR</FormLabel>
                      <LuresColorPalette field={field} />
                      <FormErrorMessage>{form.errors.color}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name='weight' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                      <InputWightNumber {...field} />
                      <FormErrorMessage>{form.errors.weight}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name='companyName' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.companyName)
                        && Boolean(form.touched.companyName)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='companyName'
                        textTransform='uppercase'
                      >COMPANY</FormLabel>
                      <Input {...field} width="100%" fontSize="1xl" id='company' variant='flushed' placeholder='Enter' />
                      <FormErrorMessage>{form.errors.companyName}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name='image' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

            </Stack>
            <Button
              mt={4}
              mb='50px'
              colorScheme='teal'
              type='button'
              onClick={onOpen}
            >
              Register
            </Button>
            <ConfirmDrawer />
          </Form>
        )
      }}
    </Formik>
  )
}