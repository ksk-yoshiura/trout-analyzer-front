import {
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { SpeedRadiotOptionMock } from '../serial_register_radio_mock'

export default function SpeedRadio(field:any) { //TODO：anyで一旦退避

  const { getRadioProps } = useRadioGroup({
    name: 'speed',
    defaultValue: 'fast',
    onChange: console.log // TODO：valueをセットする関数を用意
  })


  return (
    <HStack>
      { SpeedRadiotOptionMock.map((value) => {
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