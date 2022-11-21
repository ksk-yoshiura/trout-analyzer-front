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
import validateImage from '../../../validate/common/image'
import Thumb from "../../shared/ThumbImage"
import ToolConditionSelect from '../../shared/ToolConditionSelect'

type RodData = {
  ID?: string
  name?: string;
  companyName?: string;
  hardness?: string;
  length?: string;
  image?: any;
}

// 空データ
const vacantData: RodData = {
  hardness: '',
  length: '',
  name: '',
  companyName: '',
}

// 編集データ
type DetailProps = {
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
  data?: RodData;
}

// ToolConditionのタイプ：ロッド硬さ
const rodHardnessType = 1

export default function RodForm(props: DetailProps) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();
  // データ各種取得
  const { chosenId, data } = props

  // ロッド長さ
  const InputLengthNumber = (props: any) => {
    const [field, , helpers] = useField(props);

    // 初期値表示
    const defaultValue = field.value !== '' ? field.value : '6.0'
    useEffect(() => { // 初期値をフィールドにセット
      helpers.setValue(defaultValue)
    }, [])

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 0.1,
        min: 5,
        max: 7,
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
        <Box>ft</Box>
      </HStack>
    )
  }

  // 初期値がない場合はからデータをセット TODO：他と揃える
  // 下記エラーを解消するため
  // Warning: A component is changing an uncontrolled input to be controlled.
  const initData = data ? data : vacantData

  // axiosの設定
  const axiosInstance = CreateAxiosInstance()

  // API登録・更新
  const handleSendRodData = async (values: RodData) => {// 画像データはbase64に変換
    const imageBase64 = values.image ? await convertFileIntoBase64(values.image) : ''
    const rodPostData = {
      name: values.name,
      companyName: values.companyName,
      hardness: values.hardness,
      length: values.length,
      image: imageBase64
    }
    if (chosenId && chosenId !== '0') { // ロッドIDがある場合は更新
      axiosInstance.put('rods/' + chosenId, rodPostData)
        .then(() => {
          // リストページに遷移
          router.push('/rods')
          // アラート代わりにトーストを使用
          toast({
            title: 'Rod updated!',
            description: "We've updated your rod data for you.",
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
    } else { // ロッドIDがない場合は登録
      axiosInstance.post('rods', rodPostData)
        .then(() => {
          // リストページに遷移
          router.push('/rods')
          // アラート代わりにトーストを使用
          toast({
            title: 'Rod registered!',
            description: "We've created your rod data for you.",
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

  const validateData = () => {
    return
  }

  return (
    <Formik
      initialValues={{
        name: initData.name,
        companyName: initData.companyName,
        hardness: initData.hardness,
        length: initData.length,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendRodData(values)
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

              <Field name='length' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.length)
                        && Boolean(form.touched.length)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='length'
                        textTransform='uppercase'
                      >LENGTH</FormLabel>
                      <InputLengthNumber {...field} />
                      <FormErrorMessage>{form.errors.length}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='hardness' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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