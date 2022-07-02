import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import React from 'react'

export default function TopStatistic(): JSX.Element {
  return (
    <StatGroup w='100wh'>
      <Stat mr={3}>
        <StatLabel>Sum Fish</StatLabel>
        <StatNumber>123</StatNumber>
        <StatHelpText> JAN 12 - Feb 28</StatHelpText>
      </Stat>

      <Stat mr={3}>
        <StatLabel>Best Hit Lure</StatLabel>
        <StatHelpText>great spoon</StatHelpText>
        <StatHelpText>
          9.05%
        </StatHelpText>
      </Stat>

      <Stat mr={3}>
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