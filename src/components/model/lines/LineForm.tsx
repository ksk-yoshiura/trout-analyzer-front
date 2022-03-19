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
import ToolConditionSelect from '../../shared/ToolConditionSelect'
import { createAxiosInstance } from "../../../pages/api/utils"

type LineData = {
  name?: string;
  companyName?: string;
  lineTypeId?: string;
  thickness?: number;
  imageUrl?: string;
  CreatedAt?: string
}

// 編集データ
type DetailProps = {
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
  data?: LineData;
}

// ライン種類
const lineType = 4

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
  const axiosInstance = createAxiosInstance()
  
  // API登録・更新
  function handleSendLineData(values: LineData) {
    if (chosenId !== '0') { // ラインIDがある場合は更新
      axiosInstance.put('lines/' + chosenId, values)
        .then(function () {
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
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // ラインIDがない場合は登録
      axiosInstance.post('lines', values)
        .then(function () {
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
        .catch(function (error) {
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

  function validateData(value: LineData) {
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
        name: data?.name,
        company: data?.companyName,
        thickness: data?.thickness,
        type: data?.lineTypeId,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLineData(values)
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

            <Field name='thickness' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.thickness)
                    && Boolean(form.touched.thickness)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='thickness'
                    textTransform='uppercase'
                  >THICKNESS</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='thickness' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.thickness}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='lineTypeId' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.lineTypeId)
                    && Boolean(form.touched.lineTypeId)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='lineTypeId'
                    textTransform='uppercase'
                  >TYPE</FormLabel>
                  <ToolConditionSelect field={field} typeNum={lineType} /><FormErrorMessage>{form.errors.lineTypeId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='companyName' validate={validateData}>
              {({ field, form }: FieldProps) => (
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