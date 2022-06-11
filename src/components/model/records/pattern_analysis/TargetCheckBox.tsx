import { Checkbox, CheckboxGroup, Stack, Wrap, WrapItem } from '@chakra-ui/react'

export default function TargetCheckBox() {
  return (
    <CheckboxGroup colorScheme='green' defaultValue={[]}>
      <Stack spacing={[2, 5]} direction={['row']} pb={4}>
        <Checkbox value='speed'>Speed</Checkbox>
        <Checkbox value='depth'>Depth</Checkbox>
        <Checkbox value='weather'>Weather</Checkbox>
      </Stack>
      <Stack spacing={[2, 5]} direction={['row']} pb={4}>
        <Checkbox value='tackle'>Tackle</Checkbox>
        <Checkbox value='lure_type'>Lure Type</Checkbox>
        <Checkbox value='color'>Lure Color</Checkbox>
      </Stack>
    </CheckboxGroup>
  )
}