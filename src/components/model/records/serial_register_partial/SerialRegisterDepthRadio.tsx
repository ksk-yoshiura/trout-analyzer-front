import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { DepthRadiotOptionMock } from '../../mock/serial_register/serial_register_radio_mock'

export default function DepthRadio() {

  const { getRadioProps } = useRadioGroup({
    name: 'depth',
    defaultValue: 'top',
    onChange: console.log // TODO：valueをセットする関数を用意
  })


  return (
    <Wrap>
      {DepthRadiotOptionMock.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <WrapItem key={value}>
            <RadioCard {...radio}>
              {value}
            </RadioCard>
          </WrapItem>
        )
      })}
    </Wrap>
  )
};