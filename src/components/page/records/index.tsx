import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import ReelsList from '../../model/reels/ReelsList'

export default function Reelndex(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="90%">
        <NextLink href="/reels/create" passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>New Record</Button>
        </NextLink>
      </Flex>
      <ReelsList />
    </>
  );
}