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
import { mutate } from 'swr'

import { IMAGE_EXT, S3_DOMAIN_PATH } from "../../../const/image"
import { CreateAxiosInstance } from "../../../pages/api/utils"
import type { FieldDetail, FieldForm, FieldImage } from '../../../types/field'
import convertFileIntoBase64 from "../../../utils/base64Convert"
import validateImage from '../../../validate/common/image'
import CurrentThumbImage from "../../shared/CurrentThumbImage"
import Thumb from "../../shared/ThumbImage"

// 編集データ
type DetailProps = {
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
  data?: FieldDetail<FieldImage>;
  onFieldModalClose?: React.Dispatch<React.SetStateAction<null>>
}

export default function FieldForm(props: DetailProps) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();
  // データ各種取得
  const { chosenId, data, onFieldModalClose } = props
  // 画像URL
  const imageUrl = data?.FieldImage.image_file ? S3_DOMAIN_PATH + data?.FieldImage.image_file + IMAGE_EXT : ''

  // axiosの設定
  const axiosInstance = CreateAxiosInstance()

  // API登録・更新
  const handleSendFieldData = async (values: FieldForm) => {
    // 画像データはbase64に変換
    const imageBase64 = values.image ? await convertFileIntoBase64(values.image) : ''
    const fieldPostData = {
      name: values.name,
      address: values.address,
      image: imageBase64
    }

    if (chosenId && chosenId !== '0') { // フィールドIDがある場合は更新
      axiosInstance.put('fields/' + chosenId, fieldPostData)
        .then(() => {
          // リストページに遷移
          router.push('/fields')
          // アラート代わりにトーストを使用
          toast({
            title: 'Field updated!',
            description: "We've updated your field data for you.",
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
    } else { // フィールドIDがない場合は登録
      axiosInstance.post('fields', fieldPostData)
        .then(() => {
          if (router.route === '/preparation/field') {
            // モーダル閉じる
            onFieldModalClose?.(null)
            // 追加されて選択できる
            mutate('fields')
          } else {
            // リストページに遷移
            router.push('/fields')
          }
          // アラート代わりにトーストを使用
          toast({
            title: 'Field registered!',
            description: "We've created your field data for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch((error) => {
          toast({
            title: 'Failed!',
            description: error.messsage,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    }
  }

  // バリデーション
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
              onClick={() => {
                submitForm(),
                  setTimeout(() => { return onClose() }, 1000)
              }}
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
        address: data?.address,
        image: undefined // TODO ：適切な形式で
      }}
      validateOnChange
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendFieldData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => {
        return <Form>
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
                    <Input {...field} fontSize="1xl" id='name' variant='flushed' placeholder='Enter' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )
              }}
            </Field>

            <Field name='address' validate={validateData}>
              {({ field, form }: FieldProps) => {
                return (
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

                    <CurrentThumbImage file={field.value} imageUrl={imageUrl} />

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
      }
      }
    </Formik>
  )
}