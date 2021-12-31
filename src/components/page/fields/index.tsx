import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import FieldsList from '../../model/fields/FieldsList'

export default function FieldIndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="100%">
        <NextLink href="/fields/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Field</Button>
        </NextLink>
      </Flex>
      <FieldsList />
    </>
  );
}