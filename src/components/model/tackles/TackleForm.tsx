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
import RodDetail from '../rods/RodDetail'
import ReelDetail from '../reels/ReelDetail'
import LineDetail from '../lines/LineDetail'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/[id]"
import axios from 'axios'

const fetcher = (url: string) => axios(url)
  .then((res) => {
    return res.data
  })

type Tackle = {
  rodId: string
  reelId: string
  lineId: string
}

export default function TackleForm() {
  // パラメータからタックルID取得
  const router = useRouter();
  const { id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()

  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('/api/tackles/' + id, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  console.log(data.tackle?.rod.id)

  // API登録・更新
  function handleSendTackleData(values: Tackle) {
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

  function validateData(value: Tackle) {
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
    <>
      <Formik
        initialValues={{
          rodId: '',
          reelId: '',
          lineId: '',
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
                      fontSize="12px"
                      htmlFor='rodId'
                      textTransform='uppercase'
                    >rod</FormLabel>
                    <Input {...field} type="hidden" id='rodId' />
                    <FormErrorMessage>{form.errors.rodId}</FormErrorMessage>

                  </FormControl>
                )}
              </Field>

              <Field name='reelId' validate={validateData}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={Boolean(form.errors.reelId)
                      && Boolean(form.touched.reelId)}
                  >
                    <FormLabel
                      fontSize="12px"
                      htmlFor='reelId'
                      textTransform='uppercase'
                    >reel</FormLabel>
                    <Input {...field} type="hidden" id='reelId' />
                    <FormErrorMessage>{form.errors.reelId}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='lineId' validate={validateData}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={Boolean(form.errors.lineId)
                      && Boolean(form.touched.lineId)}
                  >
                    <FormLabel
                      fontSize="12px"
                      htmlFor='lineId'
                      textTransform='uppercase'
                    >line</FormLabel>
                    <Input {...field} type="hidden" id='lineId' />
                    <FormErrorMessage>{form.errors.lineId}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

            </Stack>
            {
              data.tackle ?
                <>
                  <RodDetail chosenId={Number(data.tackle?.rod.id)} />
                  <ReelDetail chosenId={Number(data.tackle?.reel.id)} />
                  <LineDetail chosenId={Number(data.tackle?.line.id)} />
                </>
                : <></>
            }
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
    </>
  )
}