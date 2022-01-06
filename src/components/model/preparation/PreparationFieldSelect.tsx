import {
  Select,
} from '@chakra-ui/react'
import { FieldSelectMock } from '../mock/field_select_mock'

export default function LureTypeSelect() {
  return (
    <Select mr={5} w="100%" placeholder='Select Field'>
      {
        FieldSelectMock.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          )
        })
      }
    </Select>
  )
};