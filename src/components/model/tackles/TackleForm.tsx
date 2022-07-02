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
import React, { useState } from 'react'

import { createAxiosInstance } from "../../../pages/api/utils"
import LineDetail from '../lines/LineDetail'
import LinesList from '../lines/LinesList'
import ReelDetail from '../reels/ReelDetail'
import ReelsList from '../reels/ReelsList'
import RodDetail from '../rods/RodDetail'
import RodsList from '../rods/RodsList'

type Tackle = {
  ID: string
  CreatedAt: string
  Rod: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    length: string
    RodHardnessCondition: { typeName: string }
    companyName: string
    CreatedAt: string
  },
  Reel: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    TypeNumberCondition: { typeName: string }
    GearCondition: { typeName: string }
    companyName: string
    CreatedAt: string
  },
  Line: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    thickness: string
    lineType: string
    companyName: string
    CreatedAt: string
  }
}

type DetailProps = {
  tackleData?: Tackle
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
}

type TackleForm = {
  rodId?: string | number
  reelId?: string | number
  lineId?: string | number
}

export default function TackleForm(props: DetailProps) {
  // 確認ドロワー
  const {
    isOpen: isOpneConfirmDrawer,
    onOpen: onOpenConfirmDrawer,
    onClose: onCloseConfirmDrawer
  } = useDisclosure()

  // ロッドリスト表示・非表示切り替え
  const [rodChange, setRodChange] = useState(false)
  // リールリスト表示・非表示切り替え
  const [reelChange, setReelChange] = useState(false)
  // ラインリスト表示・非表示切り替え
  const [lineChange, setLineChange] = useState(false)

  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();

  // タックルデータ
  const { tackleData, chosenId } = props

  // 初期値
  const defaultRodId = tackleData ? Number(tackleData.Rod.ID) : 0;
  const defaultReelId = tackleData ? Number(tackleData.Reel.ID) : 0;
  const defaultLineId = tackleData ? Number(tackleData.Line.ID) : 0;

  // ロッドID
  const [newRodId, setNewRodId] = useState(defaultRodId)
  // リールID
  const [newReelId, setNewReelId] = useState(defaultReelId)
  // ラインID
  const [newLineId, setNewLineId] = useState(defaultLineId)

  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // fieldにセットする方法がわからないので
  // ここでセットする
  const setSendingData = (values: TackleForm) => {
    values.rodId = Number(newRodId)
    values.reelId = Number(newReelId)
    values.lineId = Number(newLineId)

    return values
  }

  // API登録・更新
  const handleSendTackleData = (values: TackleForm) => {
    const sendingData = setSendingData(values)

    if (chosenId && chosenId !== '0') { // タックルIDがある場合は更新
      axiosInstance.put('tackles/' + chosenId, sendingData)
        .then(() => {
          // リストページに遷移
          router.push('/tackles')
          // アラート代わりにトーストを使用
          toast({
            title: 'Tackle updated!',
            description: "We've updated your tackle data for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch((error) => {
          toast({
            title: 'Failed!',
            description: error.messages,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // タックルIDがない場合は登録
      axiosInstance.post('tackles', sendingData)
        .then(() => {
          // リストページに遷移
          router.push('/tackles')
          // アラート代わりにトーストを使用
          toast({
            title: 'Tackle registered!',
            description: "We've created your tackle data for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch((error) => {
          toast({
            title: 'Failed!',
            description: error.messages,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    }
  }

  const validateData = (value: TackleForm) => {
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
      <Drawer placement={'bottom'} onClose={onCloseConfirmDrawer} isOpen={isOpneConfirmDrawer}>
        <DrawerOverlay />
        <DrawerContent h={'30vh'}>
          <DrawerBody mt={10} display={'flex'} justifyContent={'space-around'}>
            <Button
              onClick={onCloseConfirmDrawer}
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
        rodId: defaultRodId,
        reelId: defaultReelId,
        lineId: defaultLineId,
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendTackleData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {() => {
        return (
          <Form>
            <Stack spacing={5}>
              <Field name='rodId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.rodId)
                        && Boolean(form.touched.rodId)}
                    >
                      <FormLabel
                        fontSize="20px"
                        htmlFor='rodId'
                        textTransform='uppercase'
                      >rod</FormLabel>
                      <Input {...field} type="hidden" id='rodId' />
                      {
                        newRodId && newRodId > 0
                          ? <Box type='button' as='button'>
                            <RodDetail chosenId={Number(newRodId)} />
                          </Box>
                          : <></>
                      }
                      <FormErrorMessage>{form.errors.rodId}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Button w={300} onClick={() => { return setRodChange(!rodChange) }}>
                {
                  rodChange ? <>Close</> : <>Select</>
                }
              </Button>
              {
                rodChange ? <RodsList isTackle={true} setNewRodId={setNewRodId} /> : <></>
              }

              <Field name='reelId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.reelId)
                        && Boolean(form.touched.reelId)}
                    >
                      <FormLabel
                        fontSize="20px"
                        htmlFor='reelId'
                        textTransform='uppercase'
                      >reel</FormLabel>
                      <Input {...field} type="hidden" id='reelId' />
                      {
                        newReelId && newReelId > 0
                          ? <Box type='button' as='button'>
                            <ReelDetail chosenId={Number(newReelId)} />
                          </Box>
                          : <></>
                      }
                      <FormErrorMessage>{form.errors.reelId}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Button w={300} onClick={() => { return setReelChange(!reelChange) }}>
                {
                  reelChange ? <>Close</> : <>Select</>
                }
              </Button>
              {
                reelChange ? <ReelsList isTackle={true} setNewReelId={setNewReelId} /> : <></>
              }

              <Field name='lineId' validate={validateData}>
                {({ field, form }: FieldProps) => {
                  return (
                    <FormControl
                      isInvalid={Boolean(form.errors.lineId)
                        && Boolean(form.touched.lineId)}
                    >
                      <FormLabel
                        fontSize="20px"
                        htmlFor='lineId'
                        textTransform='uppercase'
                      >line</FormLabel>
                      <Input {...field} type="hidden" id='lineId' />
                      {
                        newLineId && newLineId > 0
                          ? <Box type='button' as='button'>
                            <LineDetail chosenId={Number(newLineId)} />
                          </Box>
                          : <></>
                      }
                      <FormErrorMessage>{form.errors.lineId}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Button w={300} onClick={() => { return setLineChange(!lineChange) }}>
                {
                  lineChange ? <>Close</> : <>Select</>
                }
              </Button>
              {
                lineChange ? <LinesList isTackle={true} setNewLineId={setNewLineId} /> : <></>
              }

            </Stack>
            <Button
              my={10}
              colorScheme='teal'
              type='button'
              onClick={onOpenConfirmDrawer}
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