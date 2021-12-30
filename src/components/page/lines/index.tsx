import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import LinesList from '../../model/lines/LinesList'

export default function LineIndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="90%">
        <NextLink href="/lines/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Line</Button>
        </NextLink>
      </Flex>
      <LinesList />
    </>
  );
}