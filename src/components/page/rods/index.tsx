import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import RodsList from '../../model/rods/RodsList'

export default function RodIndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="90%">
        <NextLink href="/rods/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Rod</Button>
        </NextLink>
      </Flex>
      <RodsList />
    </>
  );
}