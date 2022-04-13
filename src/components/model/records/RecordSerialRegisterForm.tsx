import React from 'react'
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
import { createAxiosInstance } from "../../../pages/api/utils"
import useSWR from 'swr'
import { PatternConditionsApiResponse } from "../../../pages/api/pattern_conditions/index"
import Loading from '../../shared/Loading'


type SerialRecordData = {
  result?: string;
  speed?: string;
  depth?: string;
  weather?: string;
  lure?: string;
  tackle?: string;
}

type recordFormData = {
  result?: number;
  speed?: number;
  depth?: number;
  weather?: number;
  lureId?: number;
  tackleId?: number;
  recordId?: number;
}

type RecordDetailProp = {
  recordId: string | string[] | undefined
}

const resultType = 1
const speedType = 2
const depthType = 3
const weatherType = 4

export default function RecordSerialRegisterForm(prop: RecordDetailProp) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // レコードID
  const { recordId } = prop

  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  const patternDataSet = data.result?.map(function (value: any) { // TODO：any退避
    const dataSet = {'ID': undefined , 'typeName': ''}
    dataSet.ID = value.ID
    dataSet.typeName = value.typeName
    return dataSet
  })

  // ラジオボタンの値を名前からIDに変換
  function radioValueConvert(values: SerialRecordData) {
    // 整形前
    const valuesBeforeConvert = values

    // 入力データ
    const serialRecordData: recordFormData = {
      result: 0,
      speed: 0,
      depth: 0,
      weather: 0,
      lureId: 0,
      tackleId: 0,
      recordId: Number(recordId)
    }
    // パターンのnameをidに変換する
    patternDataSet.map(function (val) {
      if (val.typeName === valuesBeforeConvert.result) { // 釣果
        // 上書きする
        serialRecordData.result = val.ID
      }
      if (val.typeName === valuesBeforeConvert.speed) { // 速度
        // 上書きする
        serialRecordData.speed = val.ID
      }
      if (val.typeName === valuesBeforeConvert.depth) { // 深度
        // 上書きする
        serialRecordData.depth = val.ID
      }
      if (val.typeName === valuesBeforeConvert.weather) { // 天気
        // 上書きする
        serialRecordData.weather = val.ID
      }
    })
    // タイプをnumberに変更
    serialRecordData.tackleId = Number(valuesBeforeConvert.tackle)
    serialRecordData.lureId = Number(valuesBeforeConvert.lure)

    return serialRecordData
  }

  // 釣果記録
  function handleSendSerialRecordData(values: SerialRecordData) {
    const convertValues = radioValueConvert(values)
    console.log(convertValues)
    axiosInstance.post('patterns', convertValues)
      .then(function () {
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
          title: 'Failed! Try again!',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }

  function validateData(value: SerialRecordData) {
    // console.log(value)
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
              onClick={() => {submitForm(),onClose()}}
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
        weather: '',
        lureId: '',
        tackleId: '',
        recordId: recordId

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
                  <PatternConditionRadio typeNum={resultType} field={field} />
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
                  <PatternConditionRadio typeNum={speedType} field={field} />
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
                  <PatternConditionRadio typeNum={depthType} field={field} />
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
                  <PatternConditionRadio typeNum={weatherType} field={field} />
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
            width={"100%"}
            size='lg'
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