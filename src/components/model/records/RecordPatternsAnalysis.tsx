import React from 'react'
import {
  Formik,
  Form,
  Field,
  FieldProps,
  useFormikContext
} from 'formik';
import {
  Text,
  Box,
  Divider,
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
import ResultRadioGroup from '../records/pattern_analysis/ResultRadioGroup'
import TargetCheckBox from '../records/pattern_analysis/TargetCheckBox'

type PatternAnalyzeProp = {
  result: string
  target: string
}


export default function RecordPatternAnalysis() {
  // 確認ドロワー
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handlePatternAnalyze(values: PatternAnalyzeProp) {
    console.log(values)

  }
  function validateData(value: any) {
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
    <>

      <Formik
        initialValues={{
          result: '',
          target: ''

        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            handlePatternAnalyze(values)
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
                    >Select Result</FormLabel>
                    <ResultRadioGroup field={field} />
                    <FormErrorMessage>{form.errors.result}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='target' type='checkbox' validate={validateData}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={Boolean(form.errors.target)
                      && Boolean(form.touched.target)}
                  >
                    <FormLabel
                      fontSize="12px"
                      htmlFor='target'
                      textTransform='uppercase'
                    >Select Target</FormLabel>
                    <TargetCheckBox field={field} />
                    <FormErrorMessage>{form.errors.target}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

            </Stack>
            <Button
              mt={4}
              width={"100%"}
              colorScheme='teal'
              type='button'
              onClick={onOpen}
            >
              Analyze
            </Button>
            <ConfirmDrawer />
          </Form>
        )}
      </Formik>
    </>
  )
}