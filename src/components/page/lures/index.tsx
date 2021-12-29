import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import LuresList from '../../model/lures/LuresList'
import LureTypeSelect from '../../model/lures/LureTypeSelect'

export default function LureIndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} justifyContent="space-between" w="90%">
        <LureTypeSelect />
        <NextLink href="/lures/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Lures</Button>
        </NextLink>
      </Flex>
      <LuresList />
    </>
  );
}