import {
  Stack,
  Button
} from '@chakra-ui/react';
import TopStatistic from '../model/top_partial/statistic'
import NextLink from "next/link"

export default function TopPage(): JSX.Element {
  return (
    <>
      <TopStatistic />

      <Stack spacing={10}>
        <NextLink href="/preparation/tackle" passHref>
          <Button color="white" bg='tomato' w={300} p={4}>
            Get Started
          </Button>
        </NextLink>
        <Button color="white" bg='tomato' w={300} p={4}>
          Prepare
        </Button>
      </Stack>
    </>
  );
}