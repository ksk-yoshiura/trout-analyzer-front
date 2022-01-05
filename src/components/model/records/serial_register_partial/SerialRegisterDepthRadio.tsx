import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { DepthRadiotOptionMock } from '../serial_register_radio_mock'

export default function DepthRadio(field: any) { //TODO：anyで一旦退避

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