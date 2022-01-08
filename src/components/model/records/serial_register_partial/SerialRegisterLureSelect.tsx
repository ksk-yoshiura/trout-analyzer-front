import {
  Select,
  Flex
} from "@chakra-ui/react";
import { LureTypeSelectMock } from '../../mock/lures/lure_type_select_mock'

export default function LureSelect() {
  function changeHandler(event: any) { // TODO：anyで一旦退避
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureTypeId = target.value
  }

  return (
    <Flex>
      <Select w={130} onChange={(event) => changeHandler(event)} placeholder='Lure Type'>
        {
          LureTypeSelectMock.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.type}
              </option>
            )
          })
        }
      </Select>
    </Flex>
  )
}