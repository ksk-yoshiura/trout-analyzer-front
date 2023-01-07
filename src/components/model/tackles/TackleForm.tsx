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

import { CreateAxiosInstance } from "../../../pages/api/utils"
import type { LineCondition, LineDetail, LineImage } from '../../../types/line'
import type { GearCondition, ReelDetail, ReelImage, TypeNumberCondition } from '../../../types/reel'
import type { RodDetail, RodHardnessCondition, RodImage } from '../../../types/rod'
import type { TackleDetail, TackleForm } from "../../../types/tackle"
import LineDetailComponent from '../lines/LineDetail'
import LinesListComponent from '../lines/LinesList'
import ReelDetailComponent from '../reels/ReelDetail'
import ReelsListComponent from '../reels/ReelsList'
import RodDetailComponent from '../rods/RodDetail'
import RodsListComponent from '../rods/RodsList'

type DetailProps = {
  tackleData?: TackleDetail<RodDetail<RodImage, RodHardnessCondition>, ReelDetail<ReelImage, GearCondition, TypeNumberCondition>, LineDetail<LineImage, LineCondition>>
  chosenId?: string | string[]; // useRouterを使用するとstring | string[] | undefinedになる
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
  const axiosInstance = CreateAxiosInstance()

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
                            <RodDetailComponent chosenId={Number(newRodId)} />
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
                rodChange ? <RodsListComponent isTackle={true} setNewRodId={setNewRodId} /> : <></>
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
                            <ReelDetailComponent chosenId={Number(newReelId)} />
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
                reelChange ? <ReelsListComponent isTackle={true} setNewReelId={setNewReelId} /> : <></>
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
                            <LineDetailComponent chosenId={Number(newLineId)} />
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
                lineChange ? <LinesListComponent isTackle={true} setNewLineId={setNewLineId} /> : <></>
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