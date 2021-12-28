import { 
  Select,
  Stack,
  Flex,
  Button
} from '@chakra-ui/react'
import LuresList from '../../model/lures/LuresList'
import { LureTypeSelectMock } from './lure_type_select_mock'

export default function Index(): JSX.Element {
  return (
    <>
    <Flex pb={5} justifyContent="space-between" w="90%">
      <Select w={150} placeholder='Lure Type'>
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
      <Button pl={10} pr={10} colorScheme='teal'>New Lures</Button>
    </Flex>
    <LuresList />
    </>
  );
}