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

export default function RecordPatternAnalysis() {

  function validateData(value: any) {
  }
  return (
    <>

    <Formik
      initialValues={{
        result: '',
        speed: '',
        depth: '',
        weather: '',
        lureId: '',
        tackleId: '',

      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
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
                  <ResultRadioGroup />
                  <FormErrorMessage>{form.errors.result}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='target' validate={validateData}>
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
                  <TargetCheckBox />
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
          >
            Analyze
          </Button>
        </Form>
      )}
    </Formik>
    </>
  )
}