import React from 'react'
import { useRouter } from "next/router";
import {
  Formik,
  Form,
  Field,
  FieldProps
} from 'formik';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react";
import Thumb from "../../shared/ThumbImage"
import ToolConditionSelect from '../../shared/ToolConditionSelect'
import useSWR from 'swr'
import { LinesApiResponse } from "../../../pages/api/lines/[id]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type LineData = {
  name?: string;
  company?: string;
  type?: string;
  thickness?: string;
  image?: string;
}

// ライン種類
const lineType = 4

export default function LineForm() {
  // パラメータからラインID取得
  const router = useRouter();
  const { id } = router.query
  // APIからデータ取得
  const { data, error } = useSWR<LinesApiResponse, Error>('/api/lines/' + id, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>
  function handleSendLineData(values: LineData) {
    alert(JSON.stringify(values))
  }

  function validateData(value: LineData) {
    // let error
    // if (!value) {
    //   error = 'Name is required'
    // } else if (value.toLowerCase() !== 'naruto') {
    //   error = "Jeez! You're not a fan 😱"
    // }
    // return error
  }

  return (
    <Formik
      initialValues={{
        name: data.line?.name,
        company: data.line?.company,
        thickness: data.line?.thickness,
        type: data.line?.lineType,
        image: '' // TODO ：適切な形式で
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendLineData(values)
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

            <Field name='thickness' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.thickness)
                    && Boolean(form.touched.thickness)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='thickness'
                    textTransform='uppercase'
                  >THICKNESS</FormLabel>
                  <Input {...field} width="100%" fontSize="1xl" id='thickness' variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.thickness}</FormErrorMessage>
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
                  <ToolConditionSelect field={field} typeNum={lineType} /><FormErrorMessage>{form.errors.type}</FormErrorMessage>
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
            isLoading={props.isSubmitting}
            type='submit'
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )
}