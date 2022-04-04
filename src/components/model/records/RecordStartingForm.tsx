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
  FormErrorMessage,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { createAxiosInstance } from "../../../pages/api/utils"
import PreparationFieldModal from '../../model/records/preparation/PreparationFieldModal'
import PreparationFieldSelect from '../../model/records/preparation/PreparationFieldSelect'

type RecordData = { // レコードデータ
  fieldId?: string;
}

type RecordFormData = {
  fieldId?: number;
}


export default function RecordStartingForm(): JSX.Element {
  // TODO：New Fieldで登録後登録されたfieldを選択状態にしたい
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()
  // アラート
  const toast = useToast()
  // ページ遷移
  const router = useRouter();

  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // API登録・更新
  function handleSendRecordData(values: RecordData) {

    // idはnumber
    const convertedValue: RecordFormData = {fieldId: 0}
    convertedValue.fieldId = Number(values.fieldId)
    axiosInstance.post('records', convertedValue)
      .then(function (response) {
        const newRecordID = response.data.result.ID
        // リストページに遷移
        router.push('/records/serial_register/' + newRecordID)
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
  function validateData(value: RecordData) {
    // console.log(value)
    // let error
    // if (!value) {
    //   error = 'required'
    // }
    // return error
  }

  return (
    <>
      <Formik
        initialValues={{
          fieldId: '0',
        }}
        validateOnChange
        onSubmit={(values, actions) => {
          setTimeout(() => {
            handleSendRecordData(values)
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) =>
          <Form>
            <Stack spacing={5}>
              <Field name='fieldId' validate={validateData}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={Boolean(form.errors.fieldId)
                      && Boolean(form.touched.fieldId)}
                  >
                    <Flex py={50} w="100wh" justifyContent={'center'}>
                      <PreparationFieldSelect field={field} />
                      <PreparationFieldModal />
                    </Flex>
                    <FormErrorMessage>{form.errors.fieldId}</FormErrorMessage>
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
              Start
            </Button>
            <ConfirmDrawer />
          </Form>
        }
      </Formik>
    </>
  );
}