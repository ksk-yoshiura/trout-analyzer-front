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
import { createAxiosInstance } from "../../../pages/api/utils"

type FieldData = {
  name?: string;
  address?: string;
  image?: string;
}

// 編集データ
type DetailProps = {
  chosenId?: string;
  data?: FieldData;
}

export default function FieldForm(props: DetailProps) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();
  // データ各種取得
  const { chosenId, data } = props

  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // API登録・更新
  function handleSendFieldData(values: FieldData) {
    if (chosenId !== '0') { // フィールドIDがある場合は更新
      axiosInstance.put('fields/' + chosenId, values)
        .then(function () {
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
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // フィールドIDがない場合は登録
      axiosInstance.post('fields', values)
        .then(function () {
          if (router.route === '/preparation/field') {
            // 釣果記録準備画面では登録画面に遷移
            router.push('/records/serial_register')
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
        .catch(function (error) {
          console.log(error)
          // toast({
          //   title: 'Failed!',
          //   description: error,
          //   status: 'error',
          //   duration: 9000,
          //   isClosable: true,
          // })
        })
    }
  }

  // バリデーション
  function validateData(value: FieldData) {
    // console.log(value)
    // let error
    // if (!value) {
    //   error = 'required'
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
              onClick={() => {
                submitForm(),
                  setTimeout(() => onClose(), 1000)
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
        image: '' // TODO ：適切な形式で
      }}
      validateOnChange
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