import {
  Stack,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

export default function TopPage(): JSX.Element {
  return (
    <>
      <StatGroup w={300} justifyContent={'space-between'}>
        <Stat>
          <StatLabel>Caught Fish</StatLabel>
          <StatNumber>123</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Latest</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type='decrease' />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>

      <Stack spacing={10}>
        <Button color="white" bg='tomato' w={300} p={4}>
          Get Started
        </Button>
        <Button color="white" bg='tomato' w={300} p={4}>
          Preparation
        </Button>
      </Stack>
    </>
  );
}