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
import Loading from '../../shared/Loading'
import ToolConditionSelect from '../../shared/ToolConditionSelect'
import useSWR from 'swr'
import { ReelsApiResponse } from "../../../pages/api/reels/[id]"
import { createAxiosInstance } from "../../../pages/api/utils"

type ReelData = {
  name?: string;
  company?: string;
  type?: string;
  gear?: string;
  image?: string;
}

// リールギア比
const gearType = 2
// リール型番
const reelType = 3

export default function ReelForm() {
  // パラメータからリールID取得
  const router = useRouter();
  const { id } = router.query
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // axiosの設定
  const axiosInstance = createAxiosInstance()
  
  // APIからデータ取得
  const { data, error } = useSWR<ReelsApiResponse, Error>('/api/reels/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // API登録・更新
  function handleSendReelData(values: ReelData) {
    if (id) { // リールIDがある場合は更新
      axiosInstance.put('reels/' + id, values)
        .then(function () {
          // リストページに遷移
          router.push('/reels')
          // アラート代わりにトーストを使用
          toast({
            title: 'Reel updated!',
            description: "We've updated your reel data for you.",
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
    } else { // リールIDがない場合は登録
      axiosInstance.post('reels', values)
        .then(function () {
          // リストページに遷移
          router.push('/reels')
          // アラート代わりにトーストを使用
          toast({
            title: 'Reel registered!',
            description: "We've created your reel data for you.",
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

  function validateData(value: ReelData) {
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
        name: data.reel?.name,
        company: data.reel?.company,
        gear: data.reel?.gear,
        type: data.reel?.type,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendReelData(values)
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

            <Field name='gear' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.gear)
                    && Boolean(form.touched.gear)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='gear'
                    textTransform='uppercase'
                  >GEAR</FormLabel>
                  <ToolConditionSelect field={field} typeNum={gearType} />
                  <FormErrorMessage>{form.errors.gear}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='type' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.type)
                    && Boolean(form.touched.type)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='type'
                    textTransform='uppercase'
                  >TYPE</FormLabel>
                  <ToolConditionSelect field={field} typeNum={reelType} />
                  <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='company' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.company)
                    && Boolean(form.touched.company)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='company'
                    textTransform='uppercase'
                  >COMPANY</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='company' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.company}</FormErrorMessage>
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