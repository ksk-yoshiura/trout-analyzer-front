import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import type {
  FieldProps
} from 'formik';
import {
  Field,
  Form,
  Formik,
  useFormikContext
} from 'formik';
import React from 'react'
import useSWR from 'swr'

import { defaultValueList, depthType, resultType, speedType, weatherType } from "../../../const/pattern_condition_type"
import type { PatternConditionsApiResponse } from "../../../pages/api/pattern_conditions/index"
import { CreateAxiosInstance } from "../../../pages/api/utils"
import type { PatternCondition } from '../../../types/pattern_condition'
import type { RecordForm, SerialRecord } from '../../../types/record'
import Loading from '../../shared/Loading'
import PatternConditionRadio from './serial_register_partial/PatternConditionRadioBox'
import LureSelect from './serial_register_partial/SerialRegisterLureTypeSelect'
import TackleSelect from './serial_register_partial/SerialRegisterTackleSelect'

type RecordDetailProp = {
  recordId: string | string[] | undefined
}

export default function RecordSerialRegisterForm(prop: RecordDetailProp) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // レコードID
  const { recordId } = prop

  // axiosの設定
  const axiosInstance = CreateAxiosInstance()

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  const patternDataSet = data.result?.map((value: PatternCondition) => {
    const dataSet = { 'ID': 0, 'typeName': '' }
    dataSet.ID = value.ID
    dataSet.typeName = value.typeName
    return dataSet
  })

  // ラジオボタンの値を名前からIDに変換
  const radioValueConvert = (values: SerialRecord) => {
    // 整形前
    const valuesBeforeConvert = values

    // 入力データ
    const serialRecordData: RecordForm = {
      result: defaultValueList.result,
      speed: defaultValueList.speed,
      depth: defaultValueList.depth,
      weather: defaultValueList.weather,
      lureId: 0,
      tackleId: 0,
      recordId: Number(recordId)
    }
    // パターンのnameをidに変換する
    patternDataSet.map((val) => {
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
  const handleSendSerialRecordData = (values: SerialRecord) => {
    const convertValues = radioValueConvert(values)
    axiosInstance.post('patterns', convertValues)
      .then(() => {
        // アラート代わりにトーストを使用
        toast({
          title: 'Pattern registered!',
          description: "We've created your pattern data for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((error) => {
        toast({
          title: 'Failed! Try again!',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }

  const validateData = (value: SerialRecord) => {
    console.log(value)
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
              onClick={() => { submitForm(), onClose() }}
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
        result: '',
        speed: '',
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
      {() => {
        return (
          <Form>
            <Stack spacing={5}>

              <Field name='result' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='speed' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='depth' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='weather' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='lure' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
              </Field>

              <Field name='tackle' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
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
                  )
                }}
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
        )
      }}
    </Formik>
  )
}