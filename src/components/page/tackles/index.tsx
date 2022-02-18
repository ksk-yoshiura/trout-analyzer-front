import React from 'react'
import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import TacklesList from '../../model/tackles/TacklesList'

export default function TackleIndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="100%">
        <NextLink href="/tackles/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Tackle</Button>
        </NextLink>
      </Flex>
      <TacklesList />
    </>
  );
}