import { 
  Select,
  Stack,
  Flex
} from '@chakra-ui/react'
import LuresList from '../../model/lures/LuresList'
import { LureTypeSelectMock } from './lure_type_select_mock'

export default function Index(): JSX.Element {
  return (
    <>
    <Flex>
      <Select placeholder='Select option'>
        {
          LureTypeSelectMock.map((item, index) => {
            return (
              <option value={item.id}>
                {item.type}
              </option>

            )
          })
        }
      </Select>
    </Flex>
    <LuresList />
    </>
  );
}