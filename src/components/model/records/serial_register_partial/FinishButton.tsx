import React from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  Stack,
  Input,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useToast
} from "@chakra-ui/react"
import {
  Formik,
  Form,
  Field,
  FieldProps,
  useFormikContext
} from 'formik';
import { useRouter } from "next/router";
import { createAxiosInstance } from "../../../../pages/api/utils"


type DetailProp = {
  recordId: string | string[] | undefined
}

export default function FinishButton(props: DetailProp) {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();
  // レコードID取得
  const { recordId } = props

  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // 釣果記録終了
  function handleFinishSerialRegister(values: DetailProp) {
    axiosInstance.post('records/finish', values)
        .then(function () {
          // トップページに遷移
          router.push('/')
          // アラート代わりにトーストを使用
          toast({
            title: 'Finished register!',
            description: "We've finished recording data.",
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
              onClick={() => {
                submitForm(),
                  setTimeout(() => onClose(), 1000)
              }}
              colorScheme='teal'
              variant='solid'
            >Confirm</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }

  // バリデーション
  function validateData(value: any) {
    // console.log(value)
    // let error
    // if (!value) {
    //   error = 'required'
    // }
    // return error
  }

  return (
    <Formik
      initialValues={{
        recordId: recordId
      }}
      validateOnChange
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleFinishSerialRegister(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) =>
        <Form>
          <Stack spacing={5}>
            <Field name='recordId' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.recordId)
                    && Boolean(form.touched.recordId)}
                >
                  <Input type={'hidden'} {...field} fontSize="1xl" id='recordId' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.recordId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Stack>
          <Button
            mt={4}
            width="100%"
            size='lg'
            colorScheme='red'
            type='button'
            onClick={onOpen}
          >
            Finish Recording
          </Button>
          <ConfirmDrawer />
        </Form>
      }
    </Formik>
  )

}