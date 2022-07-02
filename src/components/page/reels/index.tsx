import {
  Button,
  Flex
} from '@chakra-ui/react'
import NextLink from "next/link"
import React from 'react'

import ReelsList from '../../model/reels/ReelsList'

export default function Reelndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="100%">
        <NextLink href="/reels/create" passHref>
          <Button pl={10} pr={10} colorScheme='teal'>New Reel</Button>
        </NextLink>
      </Flex>
      <ReelsList isTackle={false} />
    </>
  );
}