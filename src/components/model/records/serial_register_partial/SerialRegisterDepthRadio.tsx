import {
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { DepthRadiotOptionMock } from '../serial_register_radio_mock'

export default function DepthRadio(field:any) { //TODO：anyで一旦退避

  const { getRadioProps } = useRadioGroup({
    name: 'depth',
    defaultValue: 'top',
    onChange: console.log // TODO：valueをセットする関数を用意
  })


  return (
    <HStack>
      { DepthRadiotOptionMock.map((value) => {
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