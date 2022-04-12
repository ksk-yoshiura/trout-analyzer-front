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

      <Stack mt={50} spacing={10}>
        <NextLink href="/preparation/field" passHref>
          <Button color="white" bg='tomato' size='lg' w={300} p={4}>
            Get Started
          </Button>
        </NextLink>
      </Stack>
    </>
  );
}