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
} from "@chakra-ui/react"
import PatternConditionRadio from './serial_register_partial/PatternConditionRadioBox'
import LureSelect from './serial_register_partial/SerialRegisterLureTypeSelect'
import TackleSelect from './serial_register_partial/SerialRegisterTackleSelect'
import useSWR from 'swr'
import { PatternApiResponse } from "../../../pages/api/patterns/[id]"
import axios from 'axios'

const fetcher = (url: string) => axios(url)
  .then((res) => {
    return res.data
  })

type SerialRecordData = {
  result: string;
  speed: string;
  depth: string;
  lure: string;
  tackle: string;
}

const resultType = 1
const speedType = 2
const depthType = 3
const weatherType = 4

export default function RecordSerialRegisterForm() {
  // パラメータからパターンID取得
  const router = useRouter();
  const { id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()

  // APIからデータ取得
  // TODO：データをセット
  const { data, error } = useSWR<PatternApiResponse, Error>('/api/patterns/' + id, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  // API登録・更新
  function handleSendSerialRecordData(values: SerialRecordData) {
    if (id) { // パターンIDがある場合は更新
      axios.put('/api/patterns/edit/' + id, values)
        .then(function () {
          // リストページに遷移
          router.push('/patterns')
          // アラート代わりにトーストを使用
          toast({
            title: 'Pattern updated!',
            description: "We've updated your pattern data for you.",
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
    } else { // パターンIDがない場合は登録
      axios.post('/api/patterns/create', values)
        .then(function () {
          // リストページに遷移
          router.push('/patterns')
          // アラート代わりにトーストを使用
          toast({
            title: 'Pattern registered!',
            description: "We've created your pattern data for you.",
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

  function validateData(value: SerialRecordData) {
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
        speed: '',
        result: '',
        depth: '',
        lure: '',
        tackle: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendSerialRecordData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>

            <Field name='result' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.result)
                    && Boolean(form.touched.result)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='result'
                    textTransform='uppercase'
                  >result</FormLabel>
                  <PatternConditionRadio typeNum={resultType} />
                  <FormErrorMessage>{form.errors.result}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='speed' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.speed)
                    && Boolean(form.touched.speed)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='speed'
                    textTransform='uppercase'
                  >speed</FormLabel>
                  <PatternConditionRadio typeNum={speedType} />
                  <FormErrorMessage>{form.errors.speed}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='depth' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.depth)
                    && Boolean(form.touched.depth)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='depth'
                    textTransform='uppercase'
                  >depth</FormLabel>
                  <PatternConditionRadio typeNum={depthType} />
                  <FormErrorMessage>{form.errors.depth}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='weather' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.weather)
                    && Boolean(form.touched.weather)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='weather'
                    textTransform='uppercase'
                  >weather</FormLabel>
                  <PatternConditionRadio typeNum={weatherType} />
                  <FormErrorMessage>{form.errors.weather}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='lure' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.lure)
                    && Boolean(form.touched.lure)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='lure'
                    textTransform='uppercase'
                  >lure</FormLabel>

                  <LureSelect field={field} />

                  <FormErrorMessage>{form.errors.lure}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='tackle' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.tackle)
                    && Boolean(form.touched.tackle)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='tackle'
                    textTransform='uppercase'
                  >tackle</FormLabel>

                  <TackleSelect field={field} />

                  <FormErrorMessage>{form.errors.tackle}</FormErrorMessage>
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