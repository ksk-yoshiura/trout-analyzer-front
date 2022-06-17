import {
  Checkbox,
  CheckboxGroup,
  Stack
} from '@chakra-ui/react'

type DetailProps = {
  field: any
}

export default function TargetCheckBox(props: DetailProps) {
  const { field } = props
  return (
    <>
      <CheckboxGroup colorScheme='green' defaultValue={[]}>
        <Stack spacing={[2, 5]} direction={['row']} pb={4}>
          <Checkbox { ...field } value='speed'>Speed</Checkbox>
          <Checkbox { ...field }  value='depth'>Depth</Checkbox>
          <Checkbox { ...field } value='weather'>Weather</Checkbox>
        </Stack>
        <Stack spacing={[2, 5]} direction={['row']} pb={4}>
          <Checkbox { ...field } value='tackle'>Tackle</Checkbox>
          <Checkbox { ...field } value='lure_type'>Lure Type</Checkbox>
          <Checkbox { ...field } value='color'>Lure Color</Checkbox>
        </Stack>
      </CheckboxGroup>
    </>
  )
}