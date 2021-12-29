import {
  Flex,
  Button
} from '@chakra-ui/react'
import LuresList from '../../model/lures/LuresList'
import LureTypeSelect from '../../model/lures/LureTypeSelect'

export default function Index(): JSX.Element {
  return (
    <>
    <Flex pb={5} justifyContent="space-between" w="90%">
      <LureTypeSelect />
      <Button pl={10} pr={10} colorScheme='teal'>New Lures</Button>
    </Flex>
    <LuresList />
    </>
  );
}