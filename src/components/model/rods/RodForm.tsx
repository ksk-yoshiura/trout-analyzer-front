import React from 'react'
import { useRouter } from "next/router";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  useFormikContext,
  useField
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
  useToast,
  HStack,
  useNumberInput
} from "@chakra-ui/react";
import Thumb from "../../shared/ThumbImage"
import ToolConditionSelect from '../../shared/ToolConditionSelect'
import { createAxiosInstance } from "../../../pages/api/utils"

type RodData = {
  ID?: string
  name?: string;
  companyName?: string;
  hardness?: string;
  length?: string;
  image?: string;
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

// ロッド硬さ
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
  const InputLengthNumber = (props:any) => {
    const [field, meta, helpers] = useField(props);

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        name: field.name,
        step: 0.1,
        defaultValue: 6.0,
        min: 5,
        max: 7,
        precision: 1,
        onChange: (valueAsString, valueAsNumber) => helpers.setValue(valueAsNumber),
      })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
      <HStack maxW='150px' >
        <Button {...inc}>+</Button>
        <Input {...input} fontSize="1xl" variant='flushed' {...field} />
        <Button {...dec}>-</Button>
      </HStack>
    )
  }

  // 初期値がない場合はからデータをセット
  // 下記エラーを解消するため
  // Warning: A component is changing an uncontrolled input to be controlled.
  const initData = data ? data : vacantData

  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // API登録・更新
  function handleSendRodData(values: RodData) {
    if (chosenId && chosenId !== '0') { // ロッドIDがある場合は更新
      axiosInstance.put('rods/' + chosenId, values)
        .then(function () {
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
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // ロッドIDがない場合は登録
      console.log(values)
      // axiosInstance.post('rods', values)
      //   .then(function () {
      //     // リストページに遷移
      //     router.push('/rods')
      //     // アラート代わりにトーストを使用
      //     toast({
      //       title: 'Rod registered!',
      //       description: "We've created your rod data for you.",
      //       status: 'success',
      //       duration: 9000,
      //       isClosable: true,
      //     })
      //   })
      //   .catch(function (error) {
      //     toast({
      //       title: 'Failed!',
      //       description: error.message,
      //       status: 'error',
      //       duration: 9000,
      //       isClosable: true,
      //     })
      //   })
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
                  <InputLengthNumber {...field} />
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