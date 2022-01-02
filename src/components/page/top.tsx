import {
  Stack,
  Button
} from '@chakra-ui/react';
import TopStatistic from '../model/top_partial/statistic';

export default function TopPage(): JSX.Element {
  return (
    <>
      <TopStatistic />

      <Stack spacing={10}>
        <Button color="white" bg='tomato' w={300} p={4}>
          Get Started
        </Button>
        <Button color="white" bg='tomato' w={300} p={4}>
          Prepare
        </Button>
      </Stack>
    </>
  );
}