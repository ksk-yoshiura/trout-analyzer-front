import {
  Select,
  Flex
} from "@chakra-ui/react";
import { LureTypeSelectMock } from '../../mock/lures/lure_type_select_mock'

export default function LureSelect() {

  return (
    <Flex>
      <Select w={150} placeholder='Lure Type'>
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