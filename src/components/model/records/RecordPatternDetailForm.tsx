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
import { useRouter } from "next/router";
import React from 'react'
import useSWR from 'swr'

import { defaultValueList, depthType, resultType, speedType, weatherType } from "../../../const/pattern_condition_type"
import type { PatternConditionsApiResponse } from "../../../pages/api/pattern_conditions/index"
import { CreateAxiosInstance } from "../../../pages/api/utils"
import type { PatternForm } from '../../../types/pattern'
import type { PatternCondition } from '../../../types/pattern_condition'
import type { SerialRecord } from '../../../types/record'
import Loading from '../../shared/Loading'
import PatternConditionRadio from './serial_register_partial/PatternConditionRadioBox'
import LureSelect from './serial_register_partial/SerialRegisterLureTypeSelect'
import TackleSelect from './serial_register_partial/SerialRegisterTackleSelect'

type DetailDataProps = {
  patternData?: PatternForm
  backLinkToPatternListPage: string
}

export default function RecordSerialRegisterForm(props: DetailDataProps) {
  // パラメータからパターンID取得
  const router = useRouter();
  const { id, record_id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // パターンのデータ、戻るリンクURL取得
  const { patternData, backLinkToPatternListPage } = props

  // axiosの設定
  const axiosInstance = CreateAxiosInstance()

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // パターンリスト
  const patternDataSet = data.result?.map((value: PatternCondition) => {
    const dataSet = { ID: 0, typeName: '' }
    dataSet.ID = value.ID
    dataSet.typeName = value.typeName
    return dataSet
  })


  // ラジオボタンの値を名前からIDに変換
  const radioValueConvert = (values: SerialRecord) => {
    // 整形前
    const valuesBeforeConvert = values

    // 入力データ
    const serialRecordData: PatternForm = {
      result: defaultValueList.result,
      speed: defaultValueList.speed,
      depth: defaultValueList.depth,
      weather: defaultValueList.weather,
      lureId: 0,
      tackleId: 0,
      recordId: Number(record_id)
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

  // API登録・更新
  const handleSendSerialRecordData = (values: SerialRecord) => {
    const convertValues = radioValueConvert(values)
    if (id) { // パターンIDがある場合は更新
      axiosInstance.put('patterns/' + id, convertValues)
        .then(() => {
          // リストページに遷移
          router.push(backLinkToPatternListPage)
          // アラート代わりにトーストを使用
          toast({
            title: 'Pattern edited!',
            description: "We've edited your pattern data for you.",
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
    } else { // パターンIDがない場合は登録
      axiosInstance.post('patterns', convertValues)
        .then(() => {
          // リストページに遷移
          router.push(backLinkToPatternListPage)
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
            title: 'Failed!',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    }
  }

  const validateData = (value: SerialRecord) => {
    console.log(value)
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
        speed: patternData?.speed,
        result: patternData?.result,
        depth: patternData?.depth,
        weather: patternData?.weather,
        lureId: patternData?.lureId,
        tackleId: patternData?.tackleId
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