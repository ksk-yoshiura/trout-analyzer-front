import { useState } from 'react'
import {
  Select,
  Flex
} from "@chakra-ui/react";
import { LureTypeSelectMock } from '../../mock/lures/lure_type_select_mock'
import { LureNameListMock } from '../../mock/lures/lure_name_list_mock'

export default function LureSelect(field:any) {

  const [lureTypeId, setLureNameList] = useState('0')
  console.log(lureTypeId)
  function changeHandler(event: any) { // TODO：anyで一旦退避
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureTypeId = target.value
    // TODO：ここでルアー名リストを取得する
  }

  return (
    <>
      <Select mb={2} w={130} onChange={(event) => {changeHandler(event),setLureNameList(event.target.value)}} placeholder='Lure Type'>
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
      {
        lureTypeId !== '0' && lureTypeId ?
        <Select w='100wh' {...field} onChange={(event) => changeHandler(event)} placeholder='Name'>
          {
            LureNameListMock.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name} :{item.color} 
                </option>
              )
            })
          }
        </Select>: <></>
      }
    </>
  )
}