import {
  Select
} from "@chakra-ui/react";
import { TackleListMock } from '../../mock/tackles/tackle_list_mock'

export default function TackleSelect() {

  return (
        <Select w='100wh' placeholder='Name'>
          {
            TackleListMock.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.rod}:{item.reel}:{item.line} 
                </option>
              )
            })
          }
        </Select>
  )
}