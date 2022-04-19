import React, { useState } from 'react'
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
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useToast
} from "@chakra-ui/react";
import RodDetail from '../rods/RodDetail'
import RodsList from '../rods/RodsList'
import ReelDetail from '../reels/ReelDetail'
import ReelsList from '../reels/ReelsList'
import LineDetail from '../lines/LineDetail'
import LinesList from '../lines/LinesList'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/[id]"
import axios from 'axios'

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
}

type TackleForm = {
  rodId?: string
  reelId?: string
  lineId?: string
}

export default function TackleForm(props: DetailProps) {
  // パラメータからタックルID取得
  const router = useRouter();
  const { id } = router.query
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

  // タックルデータ
  const { tackleData } = props

  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('tackles/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  console.log(data)

  // API登録・更新
  function handleSendTackleData(values: TackleForm) {
    if (id) { // タックルIDがある場合は更新
      axios.put('/api/tackles/edit/' + id, values)
        .then(function () {
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
        .catch(function (error) {
          toast({
            title: 'Failed!',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    } else { // タックルIDがない場合は登録
      axios.post('/api/tackles/create', values)
        .then(function () {
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

  function validateData(value: TackleForm) {
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
        rodId: tackleData?.Rod.ID,
        reelId: tackleData?.Reel.ID,
        lineId: tackleData?.Line.ID,
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendTackleData(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name='rodId' validate={validateData}>
              {({ field, form }: FieldProps) => (
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

                  <Box type='button' as='button'>
                    <RodDetail chosenId={Number(tackleData?.Rod.ID)} />
                  </Box>
                  <FormErrorMessage>{form.errors.rodId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button onClick={() => setRodChange(!rodChange)}>
              {
                rodChange ? <>Close</> : <>Change</>
              }
            </Button>
            {
              rodChange ? <RodsList /> : <></>
            }

            <Field name='reelId' validate={validateData}>
              {({ field, form }: FieldProps) => (
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
                  <ReelDetail chosenId={Number(tackleData?.Reel.ID)} />
                  <FormErrorMessage>{form.errors.reelId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button onClick={() => setReelChange(!reelChange)}>
              {
                reelChange ? <>Close</> : <>Change</>
              }
            </Button>
            {
              reelChange ? <ReelsList /> : <></>
            }

            <Field name='lineId' validate={validateData}>
              {({ field, form }: FieldProps) => (
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
                  <LineDetail chosenId={Number(tackleData?.Line.ID)} />
                  <FormErrorMessage>{form.errors.lineId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button onClick={() => setLineChange(!lineChange)}>
              {
                lineChange ? <>Close</> : <>Change</>
              }
            </Button>
            {
              lineChange ? <LinesList /> : <></>
            }


          </Stack>
          <Button
            mt={4}
            colorScheme='teal'
            type='button'
            onClick={onOpenConfirmDrawer}
          >
            Register
          </Button>
          <ConfirmDrawer />
        </Form>
      )}
    </Formik>
  )
}