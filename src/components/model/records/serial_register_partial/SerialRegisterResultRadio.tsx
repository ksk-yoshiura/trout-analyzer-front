
import {
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { ResultRadiotOptionMock } from '../serial_register_radio_mock'

export default function ResultRadio(field:any) { //TODO：anyで一旦退避

  const { getRadioProps } = useRadioGroup({
    defaultValue: 'caught'
  })

  return (
    <HStack {...field}>
      { ResultRadiotOptionMock.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
};