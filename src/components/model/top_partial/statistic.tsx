import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

export default function TopStatistic(): JSX.Element {
  return (
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
  )
}