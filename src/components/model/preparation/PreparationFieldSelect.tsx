import {
  Select,
} from '@chakra-ui/react'
import { FieldSelectMock } from './field_select_mock'

export default function LureTypeSelect() {
  return (
    <Select w={400} placeholder='Select Field'>
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