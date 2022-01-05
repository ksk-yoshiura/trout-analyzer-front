import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { SpeedRadiotOptionMock } from '../serial_register_radio_mock'

export default function SpeedRadio(field: any) { //TODO：anyで一旦退避

  const { getRadioProps } = useRadioGroup({
    name: 'speed',
    defaultValue: 'fast',
    onChange: console.log // TODO：valueをセットする関数を用意
  })


  return (
    <Wrap>
      {SpeedRadiotOptionMock.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <WrapItem>
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          </WrapItem>
        )
      })}
    </Wrap>
  )
};