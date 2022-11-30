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

import { LINE_TYPE } from "../../../const/tool_condition_type"
import { CreateAxiosInstance } from "../../../pages/api/utils"
import convertFileIntoBase64 from "../../../utils/base64Convert"
import validateImage from '../../../validate/common/image'
import Thumb from "../../shared/ThumbImage"
import ToolConditionSelect from '../../shared/ToolConditionSelect'

type LineData = {
  name?: string;
  companyName?: string;
  lineTypeId?: string;
  thickness?: string;
  imageUrl?: string;
  CreatedAt?: string;
  image?: any;
}

// 編集データ
type DetailProps = {
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
  data?: LineData;
}

export default function LineForm(props: DetailProps) {
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

  // ラインの太さ
  const InputThicknessNumber = (props: any) => {
    const [field, , helpers] = useField(props);

    // 初期値表示
    const defaultValue = field.value !== '' ? field.value : '3.0'
    useEffect(() => { // 初期値をフィールドにセット
      helpers.setValue(defaultValue)
    }, [])

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 0.5,
        min: 1,
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
        <Box>lb</Box>
      </HStack>
    )
  }

  // API登録・更新
  const handleSendLineData = async (values: LineData) => {// 画像データはbase64に変換
    const imageBase64 = values.image ? await convertFileIntoBase64(values.image) : ''
    const linePostData = {
      name: values.name,
      companyName: values.companyName,
      lineTypeId: values.lineTypeId,
      thickness: values.thickness,
      image: imageBase64
    }
    if (chosenId && chosenId !== '0') { // ラインIDがある場合は更新
      axiosInstance.put('lines/' + chosenId, linePostData)
        .then(() => {
          // リストページに遷移
          router.push('/lines')
          // アラート代わりにトーストを使用
          toast({
            title: 'Line updated!',
            description: "We've updated your line data for you.",
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
    } else { // ラインIDがない場合は登録
      axiosInstance.post('lines', linePostData)
        .then(() => {
          // リストページに遷移
          router.push('/lines')
          // アラート代わりにトーストを使用
          toast({
            title: 'Line registered!',
            description: "We've created your line data for you.",
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

  const validateData = () => {
    return
  }


  const validateCompanyName = (): string => {
    // 文字数

    // 
    return ''
  }


  const validateItemName = (): string => {
    return ''
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
        thickness: data?.thickness,
        lineTypeId: data?.lineTypeId,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLineData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => {
        return (
          <Form>
            <Stack spacing={5}>
              <Field name='name' validate={validateItemName}>
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

              <Field name='thickness'>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.thickness)
                        && Boolean(form.touched.thickness)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='thickness'
                        textTransform='uppercase'
                      >THICKNESS</FormLabel>
                      <InputThicknessNumber {...field} />
                      <FormErrorMessage>{form.errors.thickness}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='lineTypeId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.lineTypeId)
                        && Boolean(form.touched.lineTypeId)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='lineTypeId'
                        textTransform='uppercase'
                      >TYPE</FormLabel>
                      <ToolConditionSelect field={field} typeNum={LINE_TYPE} /><FormErrorMessage>{form.errors.lineTypeId}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='companyName' validate={validateCompanyName}>
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
                      <Input {...field} width="100%" fontSize="1xl" id='companyName' variant='flushed' placeholder='Enter' />
                      <FormErrorMessage>{form.errors.companyName}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='image' validate={validateImage}>
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