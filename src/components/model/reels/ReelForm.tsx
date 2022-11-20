import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import type {
  FieldProps
} from 'formik';
import {
  Field,
  Form,
  Formik,
  useFormikContext
} from 'formik';
import { useRouter } from "next/router";
import React from 'react'

import { CreateAxiosInstance } from "../../../pages/api/utils"
import convertFileIntoBase64 from "../../../utils/base64Convert"
import validateImage from '../../../validate/common/image'
import Thumb from "../../shared/ThumbImage"
import ToolConditionSelect from '../../shared/ToolConditionSelect'

type ReelData = {
  name?: string;
  companyName?: string;
  typeNumberId?: string;
  gearId?: string;
  image?: any;
}

// 編集データ
type DetailProps = {
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
  data?: ReelData;
}

// リールギア比
const gearType = 2
// リール型番
const reelType = 3

export default function ReelForm(props: DetailProps) {
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

  // API登録・更新
  const handleSendReelData = async (values: ReelData) => {
    // 画像データはbase64に変換
    const imageBase64 = values.image ? await convertFileIntoBase64(values.image) : ''
    const fieldPostData = {
      name: values.name,
      companyName: values.companyName,
      typeNumberId: values.typeNumberId,
      gearId: values.gearId,
      image: imageBase64
    }
    if (chosenId && chosenId !== '0') { // リールIDがある場合は更新
      axiosInstance.put('reels/' + chosenId, fieldPostData)
        .then(() => {
          // リストページに遷移
          router.push('/reels')
          // アラート代わりにトーストを使用
          toast({
            title: 'Reel updated!',
            description: "We've updated your reel data for you.",
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
    } else { // リールIDがない場合は登録
      axiosInstance.post('reels', fieldPostData)
        .then(() => {
          // リストページに遷移
          router.push('/reels')
          // アラート代わりにトーストを使用
          toast({
            title: 'Reel registered!',
            description: "We've created your reel data for you.",
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
        gearId: data?.gearId,
        typeNumberId: data?.typeNumberId,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendReelData(values)
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

              <Field name='gearId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.gearId)
                        && Boolean(form.touched.gearId)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='gearId'
                        textTransform='uppercase'
                      >GEAR</FormLabel>
                      <ToolConditionSelect field={field} typeNum={gearType} />
                      <FormErrorMessage>{form.errors.gearId}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>

              <Field name='typeNumberId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.typeNumberId)
                        && Boolean(form.touched.typeNumberId)}
                    >
                      <FormLabel
                        fontSize="12px"
                        htmlFor='typeNumberId'
                        textTransform='uppercase'
                      >TYPE</FormLabel>
                      <ToolConditionSelect field={field} typeNum={reelType} />
                      <FormErrorMessage>{form.errors.typeNumberId}</FormErrorMessage>
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