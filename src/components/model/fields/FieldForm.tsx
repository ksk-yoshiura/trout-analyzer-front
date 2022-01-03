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

type FieldData = {
  name: string;
  place: string;
  address: string;
  image: string;
}

export default function FieldForm() {
  function handleSendFieldData(values: FieldData) {
    alert(JSON.stringify(values))

  }


  function validateData(value: FieldData) {
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
        name: '',
        place: '',
        address: '',
        image: ''
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          handleSendFieldData(values)
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
                  >NAME</FormLabel>
                  <Input {...field} fontSize="1xl" id='name'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='place' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.place)
                    && Boolean(form.touched.place)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='place'
                  >PLACE</FormLabel>
                  <Input {...field} fontSize="1xl" id='place'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.place}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            
            <Field name='address' validate={validateData}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={Boolean(form.errors.address)
                    && Boolean(form.touched.address)}
                >
                  <FormLabel
                    fontSize="12px"
                    htmlFor='address'
                  >ADDRESS</FormLabel>
                  <Input {...field} fontSize="1xl" id='address'  variant='flushed' placeholder='Enter' />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
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